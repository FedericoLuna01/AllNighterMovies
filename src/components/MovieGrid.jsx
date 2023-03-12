import { Grid, Stack } from '@chakra-ui/react'
import { MovieCard } from './MovieCard'

export const MovieGrid = ({ movies }) => {
  return (
    <Stack
      align='center'
      mb={5}
    >
      <Grid
        gap={8}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)'
        }}
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
