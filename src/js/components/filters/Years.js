import Slider from './types/slider.js'

import filter from '../../mixins/filter.js'
import wrapper from '../../templates/filter.js'

export default {
  template: `
    ${wrapper.open}
      <slider type="years"></slider>
    ${wrapper.close}
  `,
  mixins: [filter],
  components: {
    'slider': Slider,
  },
}
