import { useEffect, useState } from 'react'
import { getRecentMovies } from '../API/getMovies'
import { Pagination } from '../components/Pagination'
import { MovieGrid } from '../components/MovieGrid'
import { AllMovies } from '../layouts/AllMovies'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { StarFilter } from '../components/StarFilter'
import { useRating } from '../hooks/useRating'
import { NothingToShow } from '../components/NothingToShow'

export const Recent = () => {
  const [totalPages, setTotalPages] = useState()
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

  const getRecentMovie = async () => {
    setIsLoading(true)
    const data = await getRecentMovies(actualPage)
    setTotalPages(data.total_pages - 36990)
    setMovies(data.results)
    setFilteredMovies(data.results)
    setIsLoading(false)
  }

  useEffect(() => {
    getRecentMovie()
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
