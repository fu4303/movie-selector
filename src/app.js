'use strict';

let App = new Vue({
  el: '#app',
  data: input.data,
  ready() {
    this.$http.get(input.requestUrl + '/configuration?api_key=' + input.apiKey, function(data, status, request) {
      input.baseUrl = data.images.base_url;
    });
  },
  methods: {
    filterGenre: function(value) {
      console.log(value);
    },
    filterYear: function(value) {
      console.log(value);
    },
    recommend: function() {
      this.$http.get(input.requestUrl + '/discover/movie?api_key=' + input.apiKey + '&page=10&primary_release_date.lte=', function(data, status, request) {
        console.log(data);
      });
    }
  }
});
