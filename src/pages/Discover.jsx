import { StarIcon } from '@chakra-ui/icons'
import { Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getMovies } from '../API/getMovies'
import { MovieGrid } from '../components/MovieGrid'
import { Pagination } from '../components/Pagination'
import { AllMovies } from '../layouts/AllMovies'

const STARS = [1, 2, 3, 4, 5]

export const Discover = () => {
  const [movies, setMovies] = useState()
  const [filteredMovies, setFilteredMovies] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [starsRating, setStarsRating] = useState()

  const getPopMovies = async () => {
    const data = await getMovies(actualPage)
    setTotalPages(data.total_pages)
    setMovies(data.results)
    setFilteredMovies(data.results)
  }

  const handleRating = (rating) => {
    if (rating === starsRating) {
      setFilteredMovies(movies)
      setStarsRating(0)
      return
    }
    const filteredMovies = movies.filter((movie) => Math.floor(movie.vote_average) <= rating * 2 && Math.floor(movie.vote_average) >= rating * 2 - 2)
    setStarsRating(rating)
    setFilteredMovies(filteredMovies)
  }

  useEffect(() => {
    getPopMovies()
  }, [actualPage])

  return (
    <AllMovies>
          <Stack
            direction='row'
            align='center'
          >
            <Text color='white'>Filtrar por:</Text>
            <Stack
              direction='row'
              py={5}
            >
              {
                STARS.map((star) => (
                  <StarIcon
                    key={star}
                    onClick={() => handleRating(star)}
                    color={star <= starsRating ? 'yellow.500' : 'gray.500'}
                    _hover={{ color: 'yellow.300' }}
                    cursor='pointer'
                  />
                ))
              }
            </Stack>
          </Stack>
          <MovieGrid movies={filteredMovies} />
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
