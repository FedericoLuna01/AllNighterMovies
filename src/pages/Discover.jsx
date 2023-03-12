import { useEffect, useState } from 'react'
import { getMovies } from '../API/getMovies'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { MovieGrid } from '../components/MovieGrid'
import { NothingToShow } from '../components/NothingToShow'
import { Pagination } from '../components/Pagination'
import { StarFilter } from '../components/StarFilter'
import { useRating } from '../hooks/useRating'
import { AllMovies } from '../layouts/AllMovies'

const totalPages = 500

export const Discover = () => {
  const [actualPage, setActualPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const {
    movies,
    setMovies,
    filteredMovies,
    setFilteredMovies,
    starsRating,
    handleRating
  } = useRating()

  const getPopMovies = async () => {
    setIsLoading(true)
    const data = await getMovies(actualPage)
    setMovies(data.results)
    setFilteredMovies(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getPopMovies()
  }, [actualPage])

  return (
    <>
    {
      isLoading
        ? <LoadingSpinner />
        : <AllMovies>
        <StarFilter
          handleRating={handleRating}
          starsRating={starsRating}
        />
        <MovieGrid movies={filteredMovies} />
        {
          filteredMovies.length === 0 && !isLoading
            ? (
            <NothingToShow />
              )
            : movies && filteredMovies.length === 20 && (
            <Pagination
              actualPage={actualPage}
              setActualPage={setActualPage}
              totalPages={totalPages}
            />
            )
        }
      </AllMovies>
    }
    </>
  )
}
