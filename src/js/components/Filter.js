import data from '../data.js'
import filter from '../templates/filter.js'
import store from '../store.js'

export default {
  template: `
    ${filter.open}
      <ol>
        <li v-for="option in options" v-on:click="toggleActive(option.id)">
          <div class="check">
            <transition name="appear">
              <span class="mark" v-show="isActive(option.id)"></span>
            </transition>
          </div>

          <p>{{ option.name }}</p>
        </li>
      </ol>
    ${filter.close}
  `,
  props: ['title', 'type'],
  data: function() {
    return {
      options: store.state[this.type],
    };
  },
  computed: {
    open: function() {
      return store.state.active.open[this.type];
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
