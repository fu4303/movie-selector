import env from '../../.env.js';

function buildQuery(method, parameters) {
  return 'http://api.themoviedb.org/3/' + method + '?api_key=' + env.apiKey;
}

export default {
  genres: buildQuery('genre/movie/list'),
  images: buildQuery('configuration')
}
