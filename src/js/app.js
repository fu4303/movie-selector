'use strict';

import '../scss/app.scss';

import Vue from 'vue';
import Loading from './components/Loading.js';

new Vue({
  el: '#app',
  components: {
    'loading': Loading
  }
});
