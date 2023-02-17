import { Container, Grid, Input, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getMovies, getSearchedMovies } from '../API/getMovies'
import { MovieCard } from '../components/MovieCard'

export const Search = () => {
  const [movies, setMovies] = useState([])
  const [inputMovie, setInputMovie] = useState('')

  const getPopMovies = async () => {
    const data = await getMovies()
    setMovies(data.results)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputMovie === '') return
    const data = await getSearchedMovies(inputMovie)
    data.results.sort((a, b) => b.popularity - a.popularity)
    setInputMovie('')
    setMovies(data.results)
  }

  useEffect(() => {
    getPopMovies()
  }, [])

  return (
    <Stack
      bg='blackAlpha.800'
      align='center'
    >
      <Container
        maxW='container.xl'
        pt={32}
        >
        <Stack
          as='form'
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            placeholder='Busca una pelicula'
            bg='white'
            onChange={(e) => setInputMovie(e.target.value)}
            value={inputMovie}
            mb={12}
          />
        </Stack>
        <Grid
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
