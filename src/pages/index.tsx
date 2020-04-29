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
    <Wrap background={background} booting={booting}>
      {booting ? (
        <Loading />
      ) : (
        <Box>
          {error || !movie ? (
            <p className="md:text-lg leading-relaxed text-gray-500">
              Something went wrong… Please come back later.
            </p>
          ) : (
            <>
              <div className="md:flex items-center mb-8">
                <img
                  alt={movie.title}
                  className="object-cover w-full h-48 md:w-60 md:h-90 rounded-md shadow-md bg-gray-700 mb-8 md:mb-0"
                  width={240}
                  height={360}
                  src={movie.poster_sm}
                  srcSet={`${movie.poster_lg} 2x`}
                />
                <div className="md:ml-12">
                  <h2 className="font-semibold text-2xl md:text-4xl mb-4 leading-tight">
                    {movie.title}
                  </h2>
                  <p className="md:text-lg leading-relaxed text-gray-500">
                    {movie.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <Button label="View trailers" href={movie.trailer} first />
                {!isNavigating && (
                  <Button
                    label={loading ? 'Just a second…' : 'Recommend me another'}
                    onClick={() => get()}
                    focus={!loading && movies.length > 1}
                  />
                )}
              </div>
              <div className="text-sm font-medium text-gray-500 flex justify-between mt-6 select-none">
                {movies.length > 1 ? (
                  <Navigation
                    setCurrent={setCurrent}
                    current={current}
                    isNavigating={isNavigating}
                  />
                ) : (
                  <p>
                    This product uses the TMDb API but is not endorsed or
                    certified by TMDb.
                  </p>
                )}
              </div>
            </>
          )}
        </Box>
      )}
    </Wrap>
  )
}
