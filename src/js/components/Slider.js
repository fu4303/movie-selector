import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import data from '../data.js'
import store from '../store.js'

export default {
  template: `
    <div class="component">
      <h3>{{ title }}<span v-on:click="toggleOpen()" v-bind:class="{open: open}">{{ setText() }}</span></h3>

      <transition name="slide">
        <div v-show="open" class="slider" ref="slider">
          <div class="handle" ref="min" v-bind:style="{left: getPosition.min + '%'}" v-bind:class="{active: slider.active.min}"></div>
          <div class="range" v-bind:style="{left: getPosition.min + '%', width: getPosition.range + '%'}"></div>
          <div class="handle" ref="max" v-bind:style="{left: getPosition.max + '%'}" v-bind:class="{active: slider.active.max}"></div>
        </div>
      </transition>
    </div>
  `,
  props: ['title', 'type'],
  data: function() {
    return {
      options: store.state[this.type],
      slider: {
        active: {
          max: false,
          min: false,
        },
        max: store.state[this.type].max,
        min: store.state[this.type].min,
        position: {
          max: 100,
          min: 0,
        },
        range: store.state[this.type].max - store.state[this.type].min,
        width: undefined,
      }
    };
  },
  mounted: function() {
    const down = Observable.fromEvent(document, 'mousedown');
    const move = Observable.fromEvent(document, 'mousemove');
    const up = Observable.fromEvent(document, 'mouseup');
    let current;
    let initial = false;

    down.subscribe({
      next: event => {
        for (const element in this.$refs) {
          if (event.target === this.$refs[element]) {
            current = element;
            this.slider.active[current] = true;

            break;
          }
        }
      },
    });

    up.subscribe({
      next: () => {
        this.slider.active[current] = false;
        current = false;
        initial = false;
      },
    });

    move.subscribe({
      next: event => {
        if (! current) {
          return;
        }

        this.getWidth();

        const factor = this.slider.range / this.slider.width;

        if (! initial) {
          initial = {
            clientX: event.clientX,
            position: this.slider.position[current],
            value: this.slider[current],
          }
        }

        const position = (event.clientX - initial.clientX) * (100 / this.slider.width);
        this.slider.position[current] = initial.position + Math.round(position * 100) / 100;

        const difference = Math.round((event.clientX - initial.clientX) * factor);
        this.slider[current] = initial.value + difference;
      },
    });
  },
  computed: {
    open: function() {
      return store.state.active.open[this.type];
    },
    getPosition: function() {
      return {
        max: this.slider.position.max,
        min: this.slider.position.min,
        range: this.slider.position.max - this.slider.position.min,
      };
    },
  },
  methods: {
    getWidth: function() {
      if (! this.slider.width) {
        const rect = this.$refs.slider.getBoundingClientRect();
        this.slider.width = rect.width;
      }
    },
    isActive: function(id) {
      return store.state.active[this.type].indexOf(id) !== -1;
    },
    toggleOpen: function() {
      store.commit('toggleOpen', this.type);
    },
    setText: function()  {
      if (this.open) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleActive: function(id) {
      data.toggleActive(this.type, id);
    },
  },
}
