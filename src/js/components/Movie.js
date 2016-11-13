import store from '../store.js'

export default {
  template: `
    <div v-if="movie" id="movie">
      <div class="poster">
        <img v-bind:src="movie.poster">

        <h2>{{ movie.title }} <span>&nbsp;&bull;&nbsp; {{ movie.year }}</span></h2>
      </div>

      <div id="meta">
        <div class="meta-item rating">Rating: <span>{{ movie.rating }}</span></div>

        <a class="meta-item" v-for="genre in movie.genres" v-bind:class="{'active': isActive(genre.id)}" v-on:click="toggleActive(genre.id)">{{ genre.name }}</a>
      </div>

      <p v-if="movie.overview">{{ movie.overview }}</p>
      <p v-else>No description available.</p>

      <a v-bind:href="movie.trailer" class="button" target="_blank" tabindex="2">Search for trailers</a>
    </div>
  `,
  computed: {
    movie: () => {
      return store.state.movie;
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
