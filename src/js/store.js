import Vue from 'vue';
import Vuex from 'vuex';

import data from './data.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    active: {
      genres: [],
      years: [],
      ratings: [],
    },
    animate: false,
    genres: null,
    posterBase: null,
    ratings: [
      {id: 'lesserKnown', name: 'Include lesser known movies'},
      {id: 'bad', name: 'Include bad movies'},
    ],
    result: false,
    urlBase: null,
    years: [
      {id: 1940, name: 'ʼ40s (1940 - 1949)'},
      {id: 1950, name: 'ʼ50s (1950 - 1959)'},
      {id: 1960, name: 'ʼ60s (1960 - 1969)'},
      {id: 1970, name: 'ʼ70s (1970 - 1979)'},
      {id: 1980, name: 'ʼ80s (1980 - 1989)'},
      {id: 1990, name: 'ʼ90s (1990 - 1999)'},
      {id: 2000, name: 'ʼ00s (2000 - 2009)'},
      {id: 2010, name: 'ʼ10s (2010 - 2019)'},
    ],
  },
  mutations: {
    removeResult: state => {
      state.result = false;

      if (!state.animate) {
        state.animate = true;
      }
    },
    toggleActive: (state, payload) => {
      const index = state.active[payload.type].indexOf(payload.id);

      if (index === -1) {
        state.active[payload.type].push(payload.id);
      } else {
        state.active[payload.type].splice(index, 1);
      }
    },
    setData: state => {
      state.genres = JSON.parse(localStorage.getItem('genres'));
      state.posterBase = localStorage.getItem('posterBase');
      state.urlBase = localStorage.getItem('urlBase');
    },
    setResult: (state, result) => {
      state.result = data.convert(result);
    }
  }
});

export default store;
