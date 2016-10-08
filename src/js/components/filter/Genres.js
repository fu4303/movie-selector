import store from '../../store.js';

export default {
  template: `
    <div class="component">
      <h3>Genres<span>{{ optionsText }}</span></h3>

      <ol>
        <li v-for="genre in genres" v-on:click="toggleActive(genre.id)">
          <div class="check">
            <span class="mark" v-show="isActive(genre.id)"></span>

            <p>{{ genre.name }}</p>
          </div>
        </li>
      </ol>
    </div>
  `,
  data: () => {
    return {
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
    }
  }
}
