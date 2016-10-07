import Poster from './Poster.js';

export default {
  template: `
    <div v-if="result" id="movie">
      <poster></poster>
    </div>
  `,
  components: {
    'poster': Poster
  },
  data: function() {
    return {
      result: false
    };
  }
}
