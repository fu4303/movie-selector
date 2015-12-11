'use strict';

class Input {
  constructor() {
    this.apiKey = '';
    this.requestUrl = 'http://api.themoviedb.org/3';
    this.baseUrl = '';
    this.posterSize = 4;
    this.minVotes = 100;
    this.minAverage = 6.0;
    this.data = {
      genres: {
        4: 'Action',
        21: 'Comedy'
      },
      years: {
        1950: '50s',
        1960: '60s',
        1970: '70s',
        1980: '80s',
        1990: '90s',
        2000: '00s',
        2010: '10s'
      },
      result: false
    }
    this.selected = {
      genre: false,
      year: false
    }
  }

  convertSelection() {
    let parameters = '';

    if(this.selected.year) {
      let year = parseInt(this.selected.year);

      parameters = '&primary_release_date.gte=' + year + '-01-01&primary_release_date.lte=' + (year + 9) + '-12-31';      
    }

    return parameters;
  }

  randomize(amount) {
    return Math.ceil(Math.random() * amount);
  }

  createPath() {
    input.data.result.poster = this.baseUrl + input.posterSize + input.data.result.backdrop_path;
  }

  setYear() {
    input.data.result.year = input.data.result.release_date.slice(0, 4);
  }
}

let input = new Input();
