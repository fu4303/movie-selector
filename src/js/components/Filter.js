import Genres from './filter/Genres.js';

export default {
  template: `
    <div id="filter">
      <div id="options">
        <genres></genres>
      </div>
    </div>
  `,
  components: {
    'genres': Genres
  },
}
