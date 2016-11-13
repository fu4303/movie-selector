import Filter from './Filter.js'
import Notice from './Notice.js'
import Recommend from './Recommend.js'

export default {
  template: `
    <div id="filters">
      <div id="options">
        <movie-filter title="Genres" type="genres"></movie-filter>
        <movie-filter title="Years" type="years"></movie-filter>
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
  },
}
