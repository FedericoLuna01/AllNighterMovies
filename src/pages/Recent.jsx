import { Container, Grid, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MovieCard } from '../components/MovieCard'
import { getRecentMovies } from '../API/getMovies'

export const Recent = () => {
  const [movies, setMovies] = useState([])

  const getRecentMovie = async () => {
    const data = await getRecentMovies()
    setMovies(data.results)
  }

  useEffect(() => {
    getRecentMovie()
  }, [])
  return (
    <Stack
      bg='gray.100'
      align='center'
    >
      <Container
        maxW='container.xl'
      >
        <Grid
          pt={20}
          gap={6}
          templateColumns='repeat(4, 1fr)'
          zIndex={1}
        >
          {
            movies && movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </Grid>
      </Container>
    </Stack>
  )
}
