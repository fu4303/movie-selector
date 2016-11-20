function createRating(rating) {
  let decimal = rating.toFixed(2).split('.');
  decimal = parseInt(decimal[1]);

  if (decimal >= 25 && decimal < 75) {
    return Math.floor(rating) + ',5';
  }

  return Math.round(rating);
}

function getYear() {
  const now = new Date();

  return now.getFullYear();
}

function set(data, date) {
  localStorage.setItem('genres', JSON.stringify(data.genres.genres.filter(genre => {
    return genre.name !== 'TV Movie';
  })));

  localStorage.setItem('posterBase', data.images.images.poster_sizes[4]);
  localStorage.setItem('urlBase', data.images.images.base_url);
  localStorage.setItem('timestamp', date);
}

function setGenres(all, selection) {
  return all.filter(genre => {
    return selection.indexOf(genre.id) !== -1;
  });
}

function setTrailer(movie) {
  const title = movie.title.replace(/\s/g, '+').toLowerCase();

  return 'https://www.youtube.com/results?search_query=' + title + '+' + movie.year + '+trailer+hd';
}

const display = {
  ratingSlider: value => {
    return createRating(value / 2);
  },
  years: value => {
    return value;
  },
};

export default {
  createRating: createRating,
  display: display,
  getYear: getYear,
  set: set,
  setGenres: setGenres,
  setTrailer: setTrailer,
}
