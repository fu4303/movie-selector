import Checkboxes from './types/checkboxes.js'
import Slider from './types/slider.js'

import filter from '../../mixins/filter.js'
import wrapper from '../../templates/filter.js'

export default {
  template: `
    ${wrapper.open}
      <slider type="ratingSlider"></slider>
      <checkboxes type="ratingOptions"></checkboxes>
    ${wrapper.close}
  `,
  mixins: [filter],
  components: {
    'checkboxes': Checkboxes,
    'slider': Slider,
  },
}
