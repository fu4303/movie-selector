import Vue from 'vue'
import Vuex from 'vuex'

import data from './data.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    active: {
      genres: [],
      years: {
        max: data.getYear(),
        min: 1960,
      },
      ratings: [],
      open: {
        genres: false,
        years: false,
        ratings: false,
      },
    },
    animate: false,
    genres: null,
    movie: false,
    posterBase: null,
    ratings: [
      {id: 'lesserKnown', name: 'Include lesser known movies'},
      {id: 'bad', name: 'Include bad movies'},
    ],
    urlBase: null,
    years: {
      max: data.getYear(),
      min: 1940,
    },
  },
  mutations: {
    clear: (state, type) => {
      state.active[type] = [];
    },
    open: (state, type) => {
      state.active.open[type] = true;
    },
    removeMovie: state => {
      state.movie = false;

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
    toggleOpen: (state, type) => {
      state.active.open[type] = !state.active.open[type];
    },
    setData: state => {
      state.genres = JSON.parse(localStorage.getItem('genres'));
      state.posterBase = localStorage.getItem('posterBase');
      state.urlBase = localStorage.getItem('urlBase');
    },
    setMovie: (state, movie) => {
      state.movie = data.convert(movie);
    },
    setSliderValue: (state, payload) => {
      state.active[payload.type][payload.bound] = payload.value;
    },
  },
});

export default store
