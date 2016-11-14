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
    isActive: function(id) {
      return store.state.active[this.type].indexOf(id) !== -1;
    },
    setText: function()  {
      if (this.open) {
        return 'Hide options';
      } else {
        return 'Show options';
      }
    },
    toggleActive: function(id) {
      data.toggleActive(this.type, id);
    },
    toggleOpen: function() {
      store.commit('toggleOpen', this.type);
    },
  },
}
