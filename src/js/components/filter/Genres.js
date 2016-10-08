import store from '../../store.js';

export default {
  template: `
    <div class="component">
      <h3>Genres<span v-on:click="toggleShow()" v-bind:class="{'active': active}">{{ setText() }}</span></h3>

      <transition name="slide">
        <ol v-show="active">
          <li v-for="genre in genres" v-on:click="toggleActive(genre.id)">
            <div class="check">
              <transition name="appear">
                <span class="mark" v-show="isActive(genre.id)"></span>
              </transition>
            </div>

            <p>{{ genre.name }}</p>
          </li>
        </ol>
      </transition>
    </div>
  `,
  data: () => {
    return {
      active: false,
      genres: store.state.genres
    };
  },
  methods: {
    isActive: id => {
      return store.state.active.genres.indexOf(id) !== -1;
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
        type: 'genres',
        id: id
      });
    },
    toggleShow: function() {
      this.active = !this.active;
    }
  }
}
