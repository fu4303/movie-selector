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
      years: {},
      ready: true,
      result: false,
      selected: {
        genres: [],
        year: false,
        lesserKnown: false,
        bad: false
      },
      options: {
        genres: {
          state: false,
          text: 'Show options'
        },
        years: {
          state: false,
          text: 'Show options'
        },
        other: {
          state: false,
          text: 'Show options'
        }
      }
    }
  }

  setBaseConfig(data) {
    this.baseUrl = data.images.base_url;
    this.posterSize = data.images.poster_sizes[this.posterSize];
  }

  populateGenres(data) {
    let genres = {};

    for(let genre of data.genres) {
      genres[genre.id] = genre.name;
    }

    this.data.genres = genres;
  }

  populateYears() {
    this.data.years = {
      1940: '40s (1940 - 1949)',
      1950: '50s (1950 - 1959)',
      1960: '60s (1960 - 1969)',
      1970: '70s (1970 - 1979)',
      1980: '80s (1980 - 1989)',
      1990: '90s (1990 - 1999)',
      2000: '00s (2000 - 2009)',
      2010: '10s (2010 - 2019)'
    }
  }

  convertSelection() {
    let parameters = '';

    if(this.data.selected.genres.length > 0) {
      parameters += '&with_genres=' + this.data.selected.genres.join('|');
    }

    if(this.data.selected.year) {
      let year = parseInt(this.data.selected.year);

      parameters += '&primary_release_date.gte=' + year + '-01-01&primary_release_date.lte=' + (year + 9) + '-12-31';      
    }

    if(this.data.selected.lesserKnown) {
      this.defaultVotes = this.minVotes;
      this.minVotes = 10;
    } else if(this.defaultVotes) {
      this.minVotes = this.defaultVotes;
    }

    if(this.data.selected.bad) {
      this.defaultAverage = this.minAverage;
      this.minAverage = 1.0;
    } else if(this.defaultAverage) {
      this.minAverage = this.defaultAverage;
    }

    return parameters;
  }

  randomize(amount) {
    return Math.ceil(Math.random() * amount);
  }

  createPath() {
    if(this.data.result.backdrop_path) {
      this.data.result.poster = this.baseUrl + this.posterSize + this.data.result.backdrop_path;
    }
  }

  setYear() {
    this.data.result.year = this.data.result.release_date.slice(0, 4);
  }

  setTrailer() {
    var title = this.data.result.title.replace(/\s/g, '+').toLowerCase();

    this.data.result.trailer = this.trailerBase + '?search_query=' + title + '+' + this.data.result.year + '+trailer';
  }

}
