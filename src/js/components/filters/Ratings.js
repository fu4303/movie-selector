import Checkboxes from './types/checkboxes.js'

import filter from '../../mixins/filter.js'
import wrapper from '../../templates/filter.js'

export default {
  template: `
    ${wrapper.open}
      <checkboxes type="ratings"></checkboxes>
    ${wrapper.close}
  `,
  mixins: [filter],
  components: {
    'checkboxes': Checkboxes,
  },
}
