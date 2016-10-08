import env from '../../.env.js';
import store from './store.js';

function buildQuery(method) {
  return 'http://api.themoviedb.org/3/' + method + '?api_key=' + env.apiKey;
}

function addParameters() {
  let minAverage = 5.0;
  let minVotes = 50;
  let parameters = '';

  if (store.state.active.genres.length) {
    parameters += '&with_genres=' + store.state.active.genres.join('|');
  }

  if (store.state.active.years.length) {
    const year = store.state.active.years.shift();

    parameters += '&primary_release_date.gte=' + year + '-01-01&primary_release_date.lte=' + (year + 9) + '-12-31';
  }

  if (store.state.active.ratings.indexOf('lesserKnown') !== -1) {
    minVotes = 10;
  }

  parameters += '&vote_count.gte=' + minVotes;

  if (store.state.active.ratings.indexOf('bad') !== -1) {
    minAverage = 1.0;
  }

  parameters += '&vote_average.gte=' + minAverage;

  return parameters;
}

export default {
  genres: buildQuery('genre/movie/list'),
  images: buildQuery('configuration'),
  recommend: buildQuery('discover/movie') + addParameters(),
}
