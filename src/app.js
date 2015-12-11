'use strict';

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
      filterGenre: function(genre) {
        input.selected.genre = genre;
      },
      filterYear: function(year) {
        input.selected.year = year;
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
