'use strict';

class Input {
  constructor() {
    this.apiKey = '';
    this.requestUrl = 'http://api.themoviedb.org/3';
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
      }
    }
    this.selected = {
      genre: 'all',
      year: 'all'
    }
  }
}

let input = new Input();
