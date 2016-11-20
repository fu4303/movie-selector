import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import data from '../../../data.js'
import filter from '../../../mixins/filter.js'
import store from '../../../store.js'

export default {
  template: `
    <div>
      <div class="slider" ref="slider">
        <div class="handle" ref="min" v-bind:style="{left: getPosition.min + '%'}" v-bind:class="{active: active.min}"></div>
        <div class="range" v-bind:style="{left: getPosition.min + '%', width: getPosition.range + '%'}"></div>
        <div class="handle" ref="max" v-bind:style="{left: getPosition.max + '%'}" v-bind:class="{active: active.max}"></div>
      </div>

      <p class="slider-values">
        <span v-bind:class="{active: active.min}">{{ getValue.min }}</span> — <span v-bind:class="{active: active.max}">{{ getValue.max }}</span>
      </p>
    </div>
  `,
  props: ['type'],
  data: function() {
    return {
      active: {
        max: false,
        min: false,
      },
      current: undefined,
      previous: false,
      max: store.state.active[this.type].max,
      min: store.state.active[this.type].min,
      range: store.state[this.type].max - store.state[this.type].min,
      width: undefined,
    };
  },
  created: function() {
    this.observeDown();
    this.observeMove();
    this.observeUp();
  },
  computed: {
    getPosition: function() {
      const factor = 100 / this.range;
      const max = (this.range - (store.state[this.type].max - this.max)) * factor;
      const min = (this.range - (store.state[this.type].max - this.min)) * factor;

      return {
        max: Math.round(max * 100) / 100,
        min: Math.round(min * 100) / 100,
        range: max - min,
      };
    },
    getValue: function() {
      return {
        max: data.display[this.type](this.max),
        min: data.display[this.type](this.min),
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
    observeDown: function() {
      Observable.fromEvent(document, 'mousedown').subscribe({
        next: event => {
          for (const element in this.$refs) {
            if (event.target === this.$refs[element]) {
              document.documentElement.classList.add('drag');

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
          if (! this.current) {
            return;
          }

          document.documentElement.classList.remove('drag');

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

          this.getWidth();

          const factor = this.range / this.width;
          const difference = Math.round((event.clientX - this.previous.clientX) * factor);

          this[this.current] = this.setValue(difference);
        },
      });
    },
    setValue: function(difference) {
      const initial = store.state[this.type];
      let newValue = this.previous.value + difference;

      if (this.current === 'max' && newValue <= this.min) {
        newValue = this.min;
      } else if (this.current === 'min' && newValue >= this.max) {
        newValue = this.max;
      }

      if (newValue <= initial.min) {
        newValue = initial.min;
      } else if (newValue >= initial.max) {
        newValue = initial.max;
      }

      return newValue;
    },
  },
}
