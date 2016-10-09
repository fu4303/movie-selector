'use strict';

import '../scss/app.scss';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import Vue from 'vue';

import Filters from './components/Filters.js';
import Loading from './components/Loading.js';
import Movie from './components/Movie.js';

import api from './api.js';
import data from './data.js';
import http from './common/http.js';
import Orbs from './Orbs.js';
import store from './store.js';

new Orbs();

new Vue({
  el: '#app',
  components: {
    'movie-filters': Filters,
    'loading': Loading,
    'movie': Movie
  },
  data: {
    ready: false
  },
  computed: {
    animate: () => {
      return store.state.animate;
    }
  },
  created: function() {
    const date = Math.round(Date.now() / 1000);

    if (localStorage.getItem('timestamp')) {
      const weekInSeconds = 604800;

      store.commit('setData');

      if (date < (parseInt(localStorage.getItem('timestamp')) + weekInSeconds)) {
        this.ready = true;

        return;
      }
    }

    Observable.combineLatest(http(api.genres), http(api.images), (genres, images) => {
      return {genres: genres, images: images};
    }).subscribe({
      next: response => {
        data.set(response, date);

        this.ready = true;
      }
    });
  }
});
