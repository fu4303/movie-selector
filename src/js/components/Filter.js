import data from '../data.js'
import store from '../store.js'

export default {
  template: `
    <div class="component">
      <h3>{{ title }}<span v-on:click="toggleOpen()" v-bind:class="{'open': open}">{{ setText() }}</span></h3>

      <transition name="slide">
        <ol v-show="open">
          <li v-for="option in options" v-on:click="toggleActive(option.id)">
            <div class="check">
              <transition name="appear">
                <span class="mark" v-show="isActive(option.id)"></span>
              </transition>
            </div>

            <p>{{ option.name }}</p>
          </li>
        </ol>
      </transition>
    </div>
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
