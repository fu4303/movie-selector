import Filter from './Filter.js'
import Notice from './Notice.js'
import Recommend from './Recommend.js'
import Slider from './Slider.js'

export default {
  template: `
    <div id="filters">
      <div id="options">
        <movie-filter title="Genres" type="genres"></movie-filter>
        <movie-slider title="Years" type="years"></movie-slider>
        <movie-filter title="Ratings" type="ratings"></movie-filter>
        <recommend></recommend>
      </div>

      <notice></notice>
    </div>
  `,
  components: {
    'movie-filter': Filter,
    'movie-slider': Slider,
    'notice': Notice,
    'recommend': Recommend,
  },
}
