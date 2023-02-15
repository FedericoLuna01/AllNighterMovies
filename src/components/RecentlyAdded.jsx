import { Grid, GridItem, Image } from '@chakra-ui/react'
import { StackIcon } from '../icons/Icons'
import { Movies } from '../layouts/Movies'
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
  }
]
export const RecentlyAdded = () => {
  return (
    <Movies
      title='Películas recientemente añadidas'
      linkTitle=''
      bg='gray.100'
      icon={<StackIcon color='#f00' />}
    >
      <Grid
        templateColumns='repeat(6, 1fr)'
        gap={5}
      >
        {
          MOVIES.map(({ image, alt, id }) => (
            <GridItem
              key={id}
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
