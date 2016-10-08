import Genres from './filter/Genres.js';
import Years from './filter/Years.js';
import Ratings from './filter/Ratings.js';

export default {
  template: `
    <div id="filter">
      <div id="options">
        <genres></genres>
        <years></years>
        <ratings></ratings>
      </div>
    </div>
  `,
  components: {
    'genres': Genres,
    'years': Years,
    'ratings': Ratings,
  },
}
