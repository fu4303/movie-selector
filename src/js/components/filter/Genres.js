import store from '../../store.js';

export default {
  template: `
    <div class="component">
      <h3>Genres<span v-on:click="toggleShow()" v-bind:class="{'active': active}">{{ optionsText }}</span></h3>

      <ol v-show="active">
        <li v-for="genre in genres" v-on:click="toggleActive(genre.id)">
          <div class="check">
            <span class="mark" v-show="isActive(genre.id)"></span>
          </div>

          <p>{{ genre.name }}</p>
        </li>
      </ol>
    </div>
  `,
  data: () => {
    return {
      active: false,
      genres: store.state.genres,
      optionsText: 'Show options'
    };
  },
  methods: {
    isActive: id => {
      return false;
    },
    toggleActive: id => {
      store.commit('toggleActive', {
        type: 'genres',
        id: id
      });
    },
    toggleShow: function() {
      this.active = !this.active;
    },
  }
}
