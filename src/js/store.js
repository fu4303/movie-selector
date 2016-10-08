import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    posterBase: null,
    urlBase: null
  },
  mutations: {
    setImageBase: (state) => {
      state.posterBase = localStorage.getItem('posterBase');
      state.urlBase = localStorage.getItem('urlBase');
    }
  }
});

export default store;
