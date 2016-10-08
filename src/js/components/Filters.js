import Filter from './Filter.js';

export default {
  template: `
    <div id="filters">
      <div id="options">
        <movie-filter title="Genres" type="genres"></movie-filter>
        <movie-filter title="Years" type="years"></movie-filter>
        <movie-filter title="Ratings" type="ratings"></movie-filter>
      </div>
    </div>
  `,
  components: {
    'movie-filter': Filter,
  },
}
