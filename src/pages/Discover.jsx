import { Container, Grid, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getMovies } from '../API/getMovies'
import { MovieCard } from '../components/MovieCard'

export const Discover = () => {
  const [movies, setMovies] = useState([])

  const getPopMovies = async () => {
    const data = await getMovies()
    setMovies(data.results)
  }

  useEffect(() => {
    getPopMovies()
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
