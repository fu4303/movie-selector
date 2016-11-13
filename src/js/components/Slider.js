import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import data from '../data.js'
import store from '../store.js'

export default {
  template: `
    <div class="component">
      <h3>{{ title }}<span v-on:click="toggleOpen()" v-bind:class="{open: open}">{{ setText() }}</span></h3>

      <transition name="slide">
        <div v-show="open">
          <div class="slider" ref="slider">
            <div class="handle" ref="min" v-bind:style="{left: getPosition.min + '%'}" v-bind:class="{active: active.min}"></div>
            <div class="range" v-bind:style="{left: getPosition.min + '%', width: getPosition.range + '%'}"></div>
            <div class="handle" ref="max" v-bind:style="{left: getPosition.max + '%'}" v-bind:class="{active: active.max}"></div>
          </div>

          <p class="slider-values">
            <span v-bind:class="{active: active.min}">{{ min }}</span> — <span v-bind:class="{active: active.max}">{{ max }}</span>
          </p>
        </div>
      </transition>
    </div>
  `,
  props: ['title', 'type'],
  data: function() {
    return {
      active: {
        max: false,
        min: false,
      },
      current: undefined,
      initialMax: store.state.active[this.type].max,
      previous: false,
      max: store.state.active[this.type].max,
      min: store.state.active[this.type].min,
      range: store.state.active[this.type].max - store.state.active[this.type].min,
      width: undefined,
    };
  },
  created: function() {
    this.observeDown();
    this.observeMove();
    this.observeUp();
  },
  computed: {
    open: function() {
      return store.state.active.open[this.type];
    },
    getPosition: function() {
      const factor = 100 / this.range;
      const max = (this.range - (this.initialMax - this.max)) * factor;
      const min = (this.range - (this.initialMax - this.min)) * factor;

      return {
        max: max,
        min: min,
        range: max - min,
      };
    },
  },
  methods: {
    getWidth: function() {
      if (! this.width) {
        const rect = this.$refs.slider.getBoundingClientRect();
        this.width = rect.width;
      }
    },
    isActive: function(id) {
      return store.state.active[this.type].indexOf(id) !== -1;
    },
    observeDown: function() {
      Observable.fromEvent(document, 'mousedown').subscribe({
        next: event => {
          for (const element in this.$refs) {
            if (event.target === this.$refs[element]) {
              this.current = element;
              this.active[this.current] = true;

              break;
            }
          }
        },
      });
    },
    observeUp: function() {
      Observable.fromEvent(document, 'mouseup').subscribe({
        next: () => {
          store.commit('setSliderValue', {
            type: this.type,
            value: this[this.current],
            bound: this.current,
          });

          this.active[this.current] = false;
          this.current = false;
          this.previous = false;
        },
      });
    },
    observeMove: function() {
      Observable.fromEvent(document, 'mousemove').subscribe({
        next: event => {
          if (! this.current) {
            return;
          }

          if (! this.previous) {
            this.previous = {
              clientX: event.clientX,
              value: this[this.current],
            }
          }

          this.setValues(event);
        },
      });
    },
    setText: function()  {
      if (this.open) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    setValues: function(event) {
      this.getWidth();

      const factor = this.range / this.width;
      const difference = Math.round((event.clientX - this.previous.clientX) * factor);

      this[this.current] = this.previous.value + difference;
    },
    toggleActive: function(id) {
      data.toggleActive(this.type, id);
    },
    toggleOpen: function() {
      store.commit('toggleOpen', this.type);
    },
  },
}
