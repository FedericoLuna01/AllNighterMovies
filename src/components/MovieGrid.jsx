import { Grid, Stack } from '@chakra-ui/react'
import { MovieCard } from './MovieCard'

export const MovieGrid = ({ movies }) => {
  return (
    <Stack
      align='center'
    >
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
    </Stack>
  )
}
