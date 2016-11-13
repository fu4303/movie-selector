import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

import data from '../data.js'
import store from '../store.js'

export default {
  template: `
    <div class="component">
      <h3>{{ title }}<span v-on:click="toggleOpen()" v-bind:class="{open: open}">{{ setText() }}</span></h3>

      <transition name="slide">
        <div v-show="open" class="slider">
          <div class="handle" ref="min" v-bind:style="{left: position.min + '%'}" v-bind:class="{active: slider.active.min}"></div>
          <div class="range" v-bind:style="{left: position.min + '%', width: position.range + '%'}"></div>
          <div class="handle" ref="max" v-bind:style="{left: position.max + '%'}" v-bind:class="{active: slider.active.max}"></div>
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
        range: store.state[this.type].max - store.state[this.type].min,
      }
    };
  },
  mounted: function() {
    let current = false;
    const down = Observable.fromEvent(document, 'mousedown');
    const move = Observable.fromEvent(document, 'mousemove');
    const up = Observable.fromEvent(document, 'mouseup');

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
      },
    });

    move.subscribe({
      next: event => {},
    });
  },
  computed: {
    open: function() {
      return store.state.active.open[this.type];
    },
    position: function() {
      const factor = 100 / this.slider.range;
      const percentages = {
        max: (store.state[this.type].max - this.slider.max) * factor,
        min: (this.slider.min - store.state[this.type].min) * factor,
      };
      const max = 100 - (Math.round(percentages.max * 100) / 100);
      const min = Math.round(percentages.min * 100) / 100;

      return {
        max: max,
        min: min,
        range: max - min,
      };
    },
  },
  methods: {
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
