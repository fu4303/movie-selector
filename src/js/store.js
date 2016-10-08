import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    genres: null,
    posterBase: null,
    urlBase: null
  },
  mutations: {
    setData: (state) => {
      state.genres = JSON.parse(localStorage.getItem('genres'));
      state.posterBase = localStorage.getItem('posterBase');
      state.urlBase = localStorage.getItem('urlBase');
    }
  }
});

export default store;
