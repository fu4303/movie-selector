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

      input.populateYears();
    },

    methods: {
      activeGenre: function(genre) {
        return this.selected.genres.indexOf(genre) != -1;
      },

      activeYear: function(year) {
        return year == this.selected.year;
      },

      filterGenre: function(genre) {
        if(! this.activeGenre(genre)) {
          this.selected.genres.push(genre);
        } else {
          this.selected.genres.splice(this.selected.genres.indexOf(genre), 1);
        }
      },

      filterYear: function(year) {
        if(! this.activeYear(year)) {
          this.selected.year = year;
        } else {
          this.selected.year = false;
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
