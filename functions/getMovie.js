const axios = require('axios')

const randomize = (max) => Math.ceil(Math.random() * max)
const queryStringify = (params) =>
  Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      body: JSON.stringify({ error: 'Not allowed' }),
      statusCode: 405,
    }
  }

  try {
    const url = `https://api.themoviedb.org/3/discover/movie?${queryStringify({
      api_key: process.env.API_KEY,
      'primary_release_date.gte': '1992-01-01',
      'primary_release_date.lte': '2020-04-22',
      'vote_average.gte': '6.0',
      'vote_count.gte': '192',
      with_original_language: 'en',
      without_genres: '16',
    })}`
    const all = await axios.get(url)
    const page = await axios.get(
      `${url}&page=${randomize(all.data.total_pages)}`
    )
    const index = randomize(page.data.results.length) - 1
    const result = page.data.results[index]
    const background = result.backdrop_path
      ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
      : null
    const poster_sm = result.poster_path
      ? `https://image.tmdb.org/t/p/w342${result.poster_path}`
      : null
    const poster_lg = result.poster_path
      ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
      : null
    const poster_xl = result.poster_path
      ? `https://image.tmdb.org/t/p/original${result.poster_path}`
      : null
    const trailer = `https://www.youtube.com/results?search_query=${result.title
      .toLowerCase()
      .replace(/\s/g, '+')}+${result.release_date.slice(0, 4)}+trailer+hd`
    const description =
      result.overview.length > 400
        ? `${result.overview.slice(0, 400)}…`
        : result.overview
    const movie = {
      background,
      poster_sm,
      poster_lg,
      poster_xl,
      trailer,
      title: result.title,
      description: description,
      info: `Rating: ${result.vote_average} out of ${result.vote_count} votes`
    }

    return {
      body: JSON.stringify({ movie }),
      statusCode: 200,
    }
  } catch (e) {
    return {
      body: JSON.stringify({ error: e.code }),
      statusCode: 400,
    }
  }
}
