'use strict';

import '../scss/app.scss';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import Vue from 'vue';

import Filter from './components/Filter.js';
import Loading from './components/Loading.js';
import Result from './components/Result.js';

import api from './api.js';
import http from './http.js';
import store from './store.js';

new Vue({
  el: '#app',
  components: {
    'movie-filter': Filter,
    'loading': Loading,
    'result': Result
  },
  data: {
    animate: false,
    ready: false
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
      next: (res) => {
        localStorage.setItem('genres', JSON.stringify(res.genres.genres));
        localStorage.setItem('posterBase', res.images.images.poster_sizes[4]);
        localStorage.setItem('urlBase', res.images.images.base_url);
        localStorage.setItem('timestamp', date);

        store.commit('setData');
        this.ready = true;
      }
    });
  }
});
