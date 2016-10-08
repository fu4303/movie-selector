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

        
      </div>
    </div>
  `,
  computed: {
    result: function() {
      return store.state.result;
    }
  },
}
