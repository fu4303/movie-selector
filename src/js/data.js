import store from './store.js';

function createRating(rating) {
  let decimal = rating.toFixed(2);

  decimal = decimal.split('.');
  decimal = parseInt(decimal[1]);

  if (decimal >= 25 && decimal < 75) {
    return Math.floor(rating) + ',5';
  }

  return Math.round(rating);
}

export default {
  convert: result => {
    result.poster = store.state.urlBase + store.state.posterBase + result.backdrop_path;
    result.rating = createRating(result.vote_average);
    result.year = result.release_date.slice(0, 4);

    return result;
  },
  set: (data, date) => {
    localStorage.setItem('genres', JSON.stringify(data.genres.genres.filter(genre => {
      return genre.name !== 'TV Movie';
    })));

    localStorage.setItem('posterBase', data.images.images.poster_sizes[4]);
    localStorage.setItem('urlBase', data.images.images.base_url);
    localStorage.setItem('timestamp', date);

    store.commit('setData');
  }
}
