import { StarIcon } from '@chakra-ui/icons'
import { Container, Grid, Stack, Text } from '@chakra-ui/react'
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
      bg='blackAlpha.800'
      align='center'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          pt={32}
        >
          <Stack
            direction='row'
            align='center'
          >
            <Text>Filtrar por:</Text>
            <Stack
              direction='row'
            >
              {/* filtrar por estrellas */}
              <StarIcon
                color='yellow.500'
                _hover={{ color: 'yellow.300' }}
                cursor='pointer'
              />
              <StarIcon
                color='yellow.500'
                _hover={{ color: 'yellow.300' }}
                cursor='pointer'
              />
              <StarIcon
                color='yellow.500'
                _hover={{ color: 'yellow.300' }}
                cursor='pointer'
              />
              <StarIcon
                color='yellow.500'
                _hover={{ color: 'yellow.300' }}
                cursor='pointer'
              />
              <StarIcon
                color='yellow.500'
                _hover={{ color: 'yellow.300' }}
                cursor='pointer'
              />
            </Stack>
          </Stack>
        </Stack>
        <Grid
          pt={10}
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
