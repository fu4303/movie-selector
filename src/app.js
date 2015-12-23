'use strict';

! function() {

  let input = new Input();

  let app = new Vue({

    el: '#app',

    data: input.data,

    ready() {
      this.$http.get('data/data.js', function(data) {
        input.setBaseConfig(data);

        if(data.date + input.refreshTime < input.timestamp) {
          input.refreshData(this.$http);
        }
      });
    },

    methods: {
      activeGenre: function(genre) {
        return this.selected.genres.indexOf(genre) != - 1;
      },

      activeYear: function(year) {
        return year == this.selected.year;
      },

      active: function(type) {
        return type == this.selected[type];
      },

      showOptions: function(type) {
        this.options[type].state = ! this.options[type].state;

        if(this.options[type].text != 'Show options') {
          this.options[type].text = 'Show options';
        } else {
          this.options[type].text = 'Hide options';
        }
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

      filter: function(type) {
        if(! this.active(type)) {
          this.selected[type] = type;
        } else {
          this.selected[type] = false;
        }
      },

      recommend: function() {
        this.result = {};

        let recommend = Promise.resolve(input.recommend(this.$http));

        recommend.then(function(result) {
          input.data.result = result;

          input.setCurrentGenres(result.genre_ids);
          input.createPath();
          input.setYear();
          input.setTrailer();

          window.scrollTo(0, 0);

          for(let option in input.data.options) {

            input.data.options[option].state = false;
          }
        });

      }
    }

  });

}();
