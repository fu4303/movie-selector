'use strict';

Vue.config.debug = true;

! function() {

  let app = new Vue({

    el: '#app',

    data: input.data,

    ready() {
      this.$http.get(input.requestUrl + '/configuration?api_key=' + input.apiKey, function(data) {
        input.setBaseConfig(data);
      });

      this.$http.get(input.requestUrl + '/genre/movie/list?api_key=' + input.apiKey, function(data) {
        input.populateGenres(data);
      });
    },

    methods: {
      activeGenre: function(genre) {
        return genre == this.selected.genre;
      },

      activeYear: function(year) {
        return year == this.selected.year;
      },

      filterGenre: function(genre) {
        if(this.selected.genre == genre) {
          this.selected.genre = false;
        } else {
          this.selected.genre = genre;
        }
      },

      filterYear: function(year) {
        if(this.selected.year == year) {
          this.selected.year = false;
        } else {
          this.selected.year = year;
        }
      },

      recommend: function() {
        this.result = {};

        let parameters = input.convertSelection();
        let request = input.requestUrl + '/discover/movie?api_key=' + input.apiKey + parameters + '&vote_count.gte=' + input.minVotes + '&vote_average.gte=' + input.minAverage;

        this.$http.get(request, function(data) {
          let page = input.randomize(data.total_pages);

          this.$http.get(request + '&page=' + page, function(data) {
            let result = (input.randomize(data.results.length)) - 1;

            this.result = data.results[result];

            input.createPath();
            input.setYear();
            input.setTrailer();
          });
        });
      }
    }

  });

}();
