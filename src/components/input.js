'use strict';

class Input {

  constructor() {
    this.apiKey = '';
    this.requestUrl = 'http://api.themoviedb.org/3';
    this.baseUrl = '';
    this.trailerBase = 'https://www.youtube.com/results';
    this.posterSize = 4;
    this.minVotes = 50;
    this.minAverage = 6.0;
    this.data = {
      genres: {},
      years: {
        1940: '40s',
        1950: '50s',
        1960: '60s',
        1970: '70s',
        1980: '80s',
        1990: '90s',
        2000: '00s',
        2010: '10s'
      },
      ready: true,
      result: false,
      selected: {
        genre: false,
        year: false
      },
      options: {
        genres: false,
        years: false,
        other: false
      }
    }
  }

  setBaseConfig(data) {
    input.baseUrl = data.images.base_url;
    input.posterSize = data.images.poster_sizes[input.posterSize];
  }

  populateGenres(data) {
    let genres = {};

    for(let genre of data.genres) {
      genres[genre.id] = genre.name;
    }

    this.data.genres = genres;
  }

  convertSelection() {
    let parameters = '';

    if(this.data.selected.genre) {
      console.log(this.data.selected.genre);
    }

    if(this.data.selected.year) {
      let year = parseInt(this.data.selected.year);

      parameters = '&primary_release_date.gte=' + year + '-01-01&primary_release_date.lte=' + (year + 9) + '-12-31';      
    }

    return parameters;
  }

  randomize(amount) {
    return Math.ceil(Math.random() * amount);
  }

  createPath() {
    this.data.result.poster = this.baseUrl + input.posterSize + this.data.result.backdrop_path;
  }

  setYear() {
    this.data.result.year = this.data.result.release_date.slice(0, 4);
  }

  setTrailer() {
    var title = this.data.result.title.replace(/\s/g, '+').toLowerCase();

    this.data.result.trailer = this.trailerBase + '?search_query=' + title + '+' + this.data.result.year + '+trailer';
  }

}

let input = new Input();
