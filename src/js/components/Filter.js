import Genres from './filter/Genres.js';
import Years from './filter/Years.js';

export default {
  template: `
    <div id="filter">
      <div id="options">
        <genres></genres>
        <years></years>
      </div>
    </div>
  `,
  components: {
    'genres': Genres,
    'years': Years
  },
}
