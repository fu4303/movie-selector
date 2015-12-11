'use strict';

Vue.config.debug = true;

! function() {

  let app = new Vue({
    el: '#app',
    data: input.data,
    ready() {
      this.$http.get(input.requestUrl + '/configuration?api_key=' + input.apiKey, function(data) {
        input.baseUrl = data.images.base_url;
        input.posterSize = data.images.poster_sizes[input.posterSize];
      });

      // this.$http.get(input.requestUrl + '/genre/movie/list?api_key=' + input.apiKey, function(data) {
      //   console.log(data);
      // });
    },
    methods: {
      activeGenre: function(genre) {
        return genre == input.data.selected.genre;
      },
      activeYear: function(year) {
        return year == input.data.selected.year;
      },
      filterGenre: function(genre) {
        if(input.data.selected.genre == genre) {
          input.data.selected.genre = false;
        } else {
          input.data.selected.genre = genre;
        }
      },
      filterYear: function(year) {
        if(input.data.selected.year == year) {
          input.data.selected.year = false;
        } else {
          input.data.selected.year = year;
        }
      },
      recommend: function() {
        let parameters = input.convertSelection();
        let request = input.requestUrl + '/discover/movie?api_key=' + input.apiKey + parameters + '&vote_count.gte=' + input.minVotes + '&vote_average.gte=' + input.minAverage;

        this.$http.get(request, function(data) {
          let page = input.randomize(data.total_pages);

          this.$http.get(request + '&page=' + page, function(data) {
            let result = (input.randomize(data.results.length)) - 1;

            input.data.result = data.results[result];

            input.createPath();
            input.setYear();
          });
        });
      }
    }
  });

}();
