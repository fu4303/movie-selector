import data from '../data.js'
import store from '../store.js'

export default {
  props: ['title', 'type'],
  computed: {
    open: function() {
      return store.state.active.open[this.type];
    },
  },
  methods: {
    setText: function()  {
      if (this.open) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleOpen: function() {
      store.commit('toggleOpen', this.type);
    },
  },
}
