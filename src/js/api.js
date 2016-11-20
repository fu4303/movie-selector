import env from '../../.env.js'
import store from './store.js'

function buildQuery(method) {
  return 'http://api.themoviedb.org/3/' + method + '?api_key=' + env.apiKey;
}

function addParameters(page) {
  const years = store.state.active.years;
  let minVotes = 50;
  let params = '';

  params += '&primary_release_date.gte=' + years.min + '-01-01&primary_release_date.lte=' + years.max + '-12-31';

  if (store.state.active.genres.length) {
    params += '&with_genres=' + store.state.active.genres.join('|');
  }

  if (store.state.active.ratingOptions.indexOf('lesserKnown') !== -1) {
    minVotes = 10;
  }

  params += '&vote_average.gte=' + (store.state.active.ratingSlider.min / 2);
  params += '&vote_average.lte=' + (store.state.active.ratingSlider.max / 2);
  params += '&vote_count.gte=' + minVotes;

  if (page) {
    params += '&page=' + page;
  }

  return params;
}

export default {
  genres: buildQuery('genre/movie/list'),
  images: buildQuery('configuration'),
  page: page => {
    return buildQuery('discover/movie') + addParameters(page);
  },
  recommend: () => {
    return buildQuery('discover/movie') + addParameters();
  },
}
