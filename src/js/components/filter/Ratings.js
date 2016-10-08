import store from '../../store.js';

export default {
  template: `
    <div class="component">
      <h3>Other<span v-on:click="active = !active" v-bind:class="{'active': active}">{{ setText() }}</span></h3>

      <transition name="slide">
        <ol v-show="active">
          <li v-for="rating in ratings" v-on:click="toggleActive(rating.id)">
            <div class="check">
              <transition name="appear">
                <span class="mark" v-show="isActive(rating.id)"></span>
              </transition>
            </div>

            <p>{{ rating.name }}</p>
          </li>
        </ol>
      </transition>
    </div>
  `,
  data: () => {
    return {
      active: false,
      ratings: store.state.ratings,
    };
  },
  methods: {
    isActive: id => {
      return store.state.active.ratings.indexOf(id) !== -1;
    },
    setText: function()  {
      if (this.active) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleActive: id => {
      store.commit('toggleActive', {
        type: 'ratings',
        id: id
      });
    },
  }
}
