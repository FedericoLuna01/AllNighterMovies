import { Card, CardBody, CardFooter, Heading, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { getStars } from '../herlpers/getStars'
import { MoviePoster } from './MoviePoster'

export const MovieCard = ({ movie }) => {
  return (
    <Card key={movie.id} >
      <CardBody>
        <Stack>
          <MoviePoster movie={movie}/>
          <Heading
            size='md'
            as={RouterLink}
            _hover={{ color: 'orange.500' }}
            to={`/pelicula/${movie.id}`}
            w='fit-content'
          >
            {movie.title}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text>Puntuación: {getStars(movie.vote_average)}</Text>
      </CardFooter>
    </Card>
  )
}
