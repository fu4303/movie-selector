import React, { useEffect, useState } from 'react'
import Wrap from '../components/Wrap'
import Button from '../components/Button'
import Loading from '../components/Loading'
import { post } from '../http'
import Box from '../components/Box'
import { Movie } from '../types'
import Navigation from '../components/Navigation'

export default () => {
  const [error, setError] = useState(false)
  const [booting, setBooting] = useState(true)
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState<[] | Movie[]>([])
  const [current, setCurrent] = useState(0)

  const movie = movies.length ? movies[current] : null
  const background = movie
    ? movie.background
      ? movie.background
      : movie.poster_xl
    : null

  const isNavigating = current !== movies.length - 1

  const get = async () => {
    setLoading(true)

    try {
      const response = await post(`/.netlify/functions/getMovie`)
      setMovies((prevMovies) => [...prevMovies, response.data.movie])
    } catch (e) {
      setError(true)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (movies.length) {
      setCurrent(movies.length - 1)
    }
  }, [movies])

  useEffect(() => {
    ;(async () => {
      await get()
      setBooting(false)
    })()
  }, [])

  return (
    <Wrap background={background}>
      {booting ? (
        <Loading />
      ) : (
        <Box>
          {error || !movie ? (
            <p>Something went wrong… Please come back later.</p>
          ) : (
            <>
              <div className="sm:flex items-center mb-8">
                <img
                  alt={movie.title}
                  className="w-60 h-90 rounded-md shadow-md bg-gray-700 mb-8 sm:mb-0"
                  width={240}
                  height={360}
                  src={movie.poster_sm}
                  srcSet={`${movie.poster_lg} 2x`}
                />
                <div className="sm:ml-12">
                  <h2 className="font-semibold text-2xl sm:text-4xl mb-4 leading-tight">
                    {movie.title}
                  </h2>
                  <p className="sm:text-lg leading-relaxed text-gray-500">
                    {movie.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <Button label="View trailers" href={movie.trailer} gray />
                {!isNavigating && (
                  <Button
                    label={loading ? 'Just a second…' : 'Recommend me another'}
                    onClick={() => get()}
                    focus={movies.length > 1}
                  />
                )}
              </div>
              {movies.length > 1 && (
                <Navigation
                  setCurrent={setCurrent}
                  current={current}
                  isNavigating={isNavigating}
                />
              )}
            </>
          )}
        </Box>
      )}
    </Wrap>
  )
}
