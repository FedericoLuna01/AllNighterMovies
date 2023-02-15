import { Grid, GridItem, Image } from '@chakra-ui/react'
import { Movies } from '../layouts/Movies.jsx'
import { IconFlame } from '../icons/Icons'

const MOVIES = [
  {
    id: 1,
    image: '/image-1.png',
    alt: 'image-1'
  },
  {
    id: 2,
    image: '/image-2.jpg',
    alt: 'image-2'
  },
  {
    id: 3,
    image: '/image-3.jpeg',
    alt: 'image-1'
  },
  {
    id: 4,
    image: '/image-1.png',
    alt: 'image-1'
  },
  {
    id: 5,
    image: '/image-2.jpg',
    alt: 'image-1'
  },
  {
    id: 6,
    image: '/image-3.jpeg',
    alt: 'image-1'
  },
  {
    id: 7,
    image: '/image-1.png',
    alt: 'image-1'
  },
  {
    id: 8,
    image: '/image-2.jpg',
    alt: 'image-1'
  },
  {
    id: 9,
    image: '/image-3.jpeg',
    alt: 'image-1'
  }
]

export const PopularMovies = () => {
  return (
    <Movies
      title='Películas populares'
      linkTitle='Ver todas...'
      icon={<IconFlame size='20' color='#f00'/>}
    >
      <Grid
          templateColumns='repeat(6, 1fr)'
          templateRows='repeat(2, 1fr)'
          gap={5}
        >
          {
            MOVIES.map(({ id, image, alt }, index) => (
              <GridItem
              key={id}
              colSpan={ index === 0 ? 2 : 1}
              rowSpan={ index === 0 ? 2 : 1}
              >
                <Image
                  h='100%'
                  w='100%'
                  src={image}
                  alt={alt}
                  objectFit='fill'
                />
              </GridItem>
            ))
          }
        </Grid>
    </Movies>
  )
}
