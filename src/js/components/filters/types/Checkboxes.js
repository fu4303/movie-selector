import data from '../../../data.js'
import store from '../../../store.js'

export default {
  template: `
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
  `,
  props: ['type'],
  data: function() {
    return {
      options: store.state[this.type],
    };
  },
  methods: {
    isActive: function(id) {
      return store.state.active[this.type].indexOf(id) !== -1;
    },
    toggleActive: function(id) {
      data.toggleActive(this.type, id);
    },
  },
}
