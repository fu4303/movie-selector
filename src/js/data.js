import store from './store.js';

export default {
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
