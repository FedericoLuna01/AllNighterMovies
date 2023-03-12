import { Card, CardBody, CardFooter, Heading, Stack, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { getStars } from '../herlpers/getStars'
import { MoviePoster } from './MoviePoster'

export const MovieCard = ({ movie }) => {
  return (
    <Card
      key={movie.id}
      bg='blackAlpha.800'
      maxW={{
        base: '250px',
        md: '300px'
      }}
    >
      <CardBody>
        <Stack>
          <MoviePoster movie={movie}/>
          <Heading
            size='md'
            as={RouterLink}
            color='white'
            _hover={{ color: 'orange.500' }}
            to={`/pelicula/${movie.id}`}
            w='fit-content'
          >
            {movie.title}
          </Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <Text
          color='white'
        >
          Puntuación: {getStars(movie.vote_average)}
        </Text>
      </CardFooter>
    </Card>
  )
}
