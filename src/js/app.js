'use strict';

import '../scss/app.scss';

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
    store.commit('setImageBase');

    if (store.state.posterBase && store.state.urlBase && localStorage.getItem('timestamp')) {
      const weekInSeconds = 604800;

      if (date < (parseInt(localStorage.getItem('timestamp')) + weekInSeconds)) {
        this.ready = true;

        return;
      }
    }

    http(api.images).subscribe({
      next: (response) => {
        localStorage.setItem('posterBase', response.images.poster_sizes[4]);
        localStorage.setItem('timestamp', date);
        localStorage.setItem('urlBase', response.images.base_url);

        store.commit('setImageBase');

        this.ready = true;
      }
    });
  }
});
