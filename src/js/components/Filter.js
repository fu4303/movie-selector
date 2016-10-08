import store from '../store.js';

export default {
  template: `
    <div class="component">
      <h3>{{ title }}<span v-on:click="active = !active" v-bind:class="{'active': active}">{{ setText() }}</span></h3>

      <transition name="slide">
        <ol v-show="active">
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
      active: false,
      options: store.state[this.type],
    };
  },
  methods: {
    isActive: function(id) {
      return store.state.active[this.type].indexOf(id) !== -1;
    },
    setText: function()  {
      if (this.active) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleActive: function(id) {
      store.commit('toggleActive', {
        type: this.type,
        id: id
      });
    },
  },
}
