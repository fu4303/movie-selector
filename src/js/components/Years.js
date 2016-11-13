import data from '../data.js'
import store from '../store.js'

export default {
  template: `
    <div class="component">
      <h3>Years<span v-on:click="toggleOpen()" v-bind:class="{'open': open}">{{ setText() }}</span></h3>

      <transition name="slide">
        <div v-show="open">
          <div class="slider"></div>
        </div>
      </transition>
    </div>
  `,
  data: function() {
    return {
      options: store.state.years,
    };
  },
  computed: {
    open: function() {
      return store.state.active.open.years;
    },
  },
  methods: {
    isActive: function(id) {
      return store.state.active.years.indexOf(id) !== -1;
    },
    toggleOpen: function() {
      store.commit('toggleOpen', 'years');
    },
    setText: function()  {
      if (this.open) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleActive: function(id) {
      data.toggleActive('years', id);
    },
  },
}
