import Genres from './filters/Genres.js'
import Notice from './Notice.js'
import Ratings from './filters/Ratings.js'
import Recommend from './Recommend.js'
import Years from './filters/Years.js'

export default {
  template: `
    <div id="filters">
      <div id="options">
        <genres title="Genres" type="genres"></genres>
        <years title="Years" type="years"></years>
        <ratings title="Ratings" type="ratings"></ratings>
        <recommend></recommend>
      </div>

      <notice></notice>
    </div>
  `,
  components: {
    'genres': Genres,
    'notice': Notice,
    'ratings': Ratings,
    'recommend': Recommend,
    'years': Years,
  },
}
