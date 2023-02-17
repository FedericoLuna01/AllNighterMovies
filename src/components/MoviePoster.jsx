import { GridItem, Image, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const MoviePoster = ({ movie, index }) => {
  return (
    <GridItem
      key={movie.id}
      colSpan={ index === 0 ? 2 : 1}
      rowSpan={ index === 0 ? 2 : 1}
      boxShadow='lg'
    >
      <LinkBox
        _hover={{ filter: 'brightness(.5)' }}
        h='100%'
      >
        <LinkOverlay
          as={Link}
          to={`/pelicula/${movie.id}`}
        >
          <Image
            h='100%'
            w='100%'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            objectFit='fill'
          />
        </LinkOverlay>
      </LinkBox>
    </GridItem>
  )
}
