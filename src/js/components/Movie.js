import store from '../store.js';

export default {
  template: `
    <div v-if="result" id="movie">
      <div class="poster">
        <img v-bind:src="result.poster">

        <h2>{{ result.title }} <span>&nbsp;&bull;&nbsp; {{ result.year }}</span></h2>
      </div>

      <div id="meta">
        <div class="meta-item rating">Rating: <span>{{ result.rating }}</span></div>

        <a class="meta-item" v-for="genre in result.genres" v-bind:class="{'active': isActive(genre.id)}" v-on:click="toggleActive(genre.id)">{{ genre.name }}</a>
      </div>
    </div>
  `,
  computed: {
    result: () => {
      return store.state.result;
    }
  },
  methods: {
    isActive: function(id) {
      return store.state.active.genres.indexOf(id) !== -1;
    },
    toggleActive: id => {
      store.commit('open', 'genres');
      store.commit('toggleActive', {
        type: 'genres',
        id: id
      });
    },
  },
}
