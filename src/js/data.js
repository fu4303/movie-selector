import store from './store.js'

function createRating(rating) {
  let decimal = rating.toFixed(2).split('.');
  decimal = parseInt(decimal[1]);

  if (decimal >= 25 && decimal < 75) {
    return Math.floor(rating) + ',5';
  }

  return Math.round(rating);
}

function setGenres(genres) {
  return store.state.genres.filter(genre => {
    return genres.indexOf(genre.id) !== -1;
  });
}

function setTrailer(movie) {
  const title = movie.title.replace(/\s/g, '+').toLowerCase();

  return 'https://www.youtube.com/results?search_query=' + title + '+' + movie.year + '+trailer+hd';
}

export default {
  convert: movie => {
    movie.genres = setGenres(movie.genre_ids);
    movie.poster = store.state.urlBase + store.state.posterBase + movie.backdrop_path;
    movie.rating = createRating(movie.vote_average);
    movie.year = movie.release_date.slice(0, 4);
    movie.trailer = setTrailer(movie);

    return movie;
  },
  set: (data, date) => {
    localStorage.setItem('genres', JSON.stringify(data.genres.genres.filter(genre => {
      return genre.name !== 'TV Movie';
    })));

    localStorage.setItem('posterBase', data.images.images.poster_sizes[4]);
    localStorage.setItem('urlBase', data.images.images.base_url);
    localStorage.setItem('timestamp', date);

    store.commit('setData');
  },
}
