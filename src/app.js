'use strict';

! function() {

  let input = new Input();

  let app = new Vue({

    el: '#app',

    data: input.data,

    ready() {
      this.$http.get('data/data.js', function(data) {       
        if(data.date) {
          input.setBaseConfig(data);

          if(data.date + input.refreshTime < input.timestamp) {
            input.refreshData(this.$http);
          }
        } else {
          input.refreshData(this.$http);
        }
      });
    },

    methods: {
      activeGenre(genre) {
        return this.selected.genres.indexOf(genre) != - 1;
      },

      activeYear(year) {
        return year == this.selected.year;
      },

      active(type) {
        return type == this.selected[type];
      },

      showOptions(type, once = false) {
        if(once) {
          this.options[type].state = true;
        } else {
          this.options[type].state = ! this.options[type].state;
        }

        if(this.options[type].text == 'Show options') {
          this.options[type].text = 'Hide options';
        } else if(once == false) {
          this.options[type].text = 'Show options';
        }
      },

      filterGenre(genre) {
        if(! this.activeGenre(genre)) {
          this.selected.genres.push(genre);
        } else {
          this.selected.genres.splice(this.selected.genres.indexOf(genre), 1);
        }
      },

      filterYear(year) {
        if(! this.activeYear(year)) {
          this.selected.year = year;
        } else {
          this.selected.year = false;
        }
      },

      filter(type) {
        if(! this.active(type)) {
          this.selected[type] = type;
        } else {
          this.selected[type] = false;
        }
      },

      recommend() {
        // On first recommendation, animate
        this.animate = true;

        // Remove previous result
        this.result = false;

        // Scroll to top
        window.scrollTo(0, 0);

        // Retrieve recommendation
        let recommend = Promise.resolve(input.recommend(this.$http));

        recommend.then((result) => {
          this.result = result;

          // Set data for result
          input.setCurrentGenres(result.genre_ids);
          input.createPath();
          input.setYear();
          input.setTrailer();
        });

      }
    }

  });

}();
