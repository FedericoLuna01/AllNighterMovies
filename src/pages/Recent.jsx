import { Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getRecentMovies } from '../API/getMovies'
import { Pagination } from '../components/Pagination'
import { MovieGrid } from '../components/MovieGrid'
import { AllMovies } from '../layouts/AllMovies'

export const Recent = () => {
  const [movies, setMovies] = useState()
  const [totalPages, setTotalPages] = useState()
  const [actualPage, setActualPage] = useState(1)

  const getRecentMovie = async () => {
    const data = await getRecentMovies(actualPage)
    setTotalPages(data.total_pages)
    setMovies(data.results)
  }

  useEffect(() => {
    getRecentMovie()
  }, [actualPage])

  return (
    <AllMovies>
      <MovieGrid movies={movies} />
      <Stack
          h='10vh'
          align='center'
          justify='center'
        >
          {
            movies && (
              <Pagination
                actualPage={actualPage}
                setActualPage={setActualPage}
                totalPages={totalPages}
              />
            )
          }
        </Stack>
    </AllMovies>
  )
}
