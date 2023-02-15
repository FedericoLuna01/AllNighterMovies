import { StarIcon } from '@chakra-ui/icons'
import { Card, CardBody, CardFooter, Container, Grid, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'

export const Discover = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-AR`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setMovies(data.results)
  }

  const getStars = (vote) => {
    const stars = []
    vote = Math.round(vote / 2)
    for (let i = 0; i < 5; i++) {
      if (i < vote) {
        stars.push(<StarIcon key={i} color='yellow.500' />)
      } else {
        stars.push(<StarIcon key={i} color='gray.500' />)
      }
    }
    return stars
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Stack
      bg='gray.100'
      align='center'
    >
      <Navbar />
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
            movies.map((movie, index) => (
              <Card key={index} >
                <CardBody>
                  <Stack>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} key={index}/>
                    <Heading
                      size='md'
                    >
                      {movie.title}
                    </Heading>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Text>Puntuación: {getStars(movie.vote_average)}</Text>
                </CardFooter>
              </Card>
            ))
          }
        </Grid>
      </Container>
    </Stack>
  )
}
