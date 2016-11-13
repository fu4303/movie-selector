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
          <div class="slider">
            <div class="handle" ref="min" v-bind:style="{left: position.min + '%'}"></div>
            <div class="range" v-bind:style="{left: position.min + '%', width: position.range + '%'}"></div>
            <div class="handle" ref="max" v-bind:style="{left: position.max + '%'}"></div>
          </div>
        </div>
      </transition>
    </div>
  `,
  props: ['title', 'type'],
  data: function() {
    return {
      options: store.state[this.type],
      slider: {
        max: {
          current: store.state[this.type].max,
          init: store.state[this.type].max,
        },
        min: {
          current: store.state[this.type].min,
          init: store.state[this.type].min,
        },
      }
    };
  },
  computed: {
    open: function() {
      return true;
      // return store.state.active.open[this.type];
    },
    position: function() {
      const factor = 100 / (this.slider.max.init - this.slider.min.init);
      const percentages = {
        max: (this.slider.max.init - this.slider.max.current) * factor,
        min: (this.slider.min.current - this.slider.min.init) * factor,
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
