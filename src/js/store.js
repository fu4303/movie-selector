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
      ratingOptions: [],
      ratingSlider: {
        max: 20,
        min: 12,
      },
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
    ratingOptions: [
      {id: 'lesserKnown', name: 'Include lesser known movies'},
    ],
    ratingSlider: {
      max: 20,
      min: 2,
    },
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
    setError: (state, error) => {
      state.movie = { error };
    },
    setMovie: (state, movie) => {
      movie.genres = data.setGenres(state.genres, movie.genre_ids);
      movie.poster = movie.backdrop_path ? store.state.urlBase + store.state.posterBase + movie.backdrop_path : null;
      movie.rating = data.createRating(movie.vote_average);
      movie.year = movie.release_date.slice(0, 4);
      movie.trailer = data.setTrailer(movie);

      state.movie = movie;
    },
    setSliderValue: (state, payload) => {
      state.active[payload.type][payload.bound] = payload.value;
    },
  },
});

export default store
