import Filter from './Filter.js'
import Notice from './Notice.js'
import Recommend from './Recommend.js'
import Years from './Years.js'

export default {
  template: `
    <div id="filters">
      <div id="options">
        <movie-filter title="Genres" type="genres"></movie-filter>
        <years></years>
        <movie-filter title="Ratings" type="ratings"></movie-filter>
        <recommend></recommend>
      </div>

      <notice></notice>
    </div>
  `,
  components: {
    'movie-filter': Filter,
    'notice': Notice,
    'recommend': Recommend,
    'years': Years,
  },
}
