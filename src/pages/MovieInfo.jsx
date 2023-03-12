import { Container, Heading, Image, Stack, StackDivider, Tag, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getStars } from '../herlpers/getStars'

export const MovieInfo = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState()
  const getMovie = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}&language=es-AR`
    const response = await fetch(url)
    const data = await response.json()
    setMovie(data)
  }

  const getDate = (date) => {
    const newDate = new Date(date)
    return newDate.getFullYear()
  }

  const getGenres = (genres) => {
    const genresArray = []
    genres.forEach(genre => {
      genresArray.push(genre.name)
    })
    return genresArray
  }

  const getRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    return `${hours}h ${minutes}min`
  }

  const getProdCompanies = (companies) => {
    const companiesArray = []
    companies.forEach(company => {
      companiesArray.push(company.name)
    })
    return companiesArray.join(', ')
  }

  useEffect(() => {
    getMovie(id)
  }, [])

  console.log(movie)
  return (
    <Stack
      bg='blackAlpha.800'
      color='white'
    >
      <Container
        maxW='container.xl'
        minH='91vh'
      >
        {
          movie &&
          <Stack
            direction='column'
            h='100%'
          >
            <Stack
              pos='relative'
              h='25vh'
            >
              <Stack
                pos='absolute'
                bgGradient={'linear(to-t, blackAlpha.800, transparent)'}
                zIndex={2}
                w='100%'
                h='100%'
              ></Stack>
              <Image
                zIndex={1}
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
                filter='opacity(.5)'
                h='100%'
                objectFit='cover'
                objectPosition={'center'}
                sx={{ marginTop: '0 !important' }}
              />
            </Stack>
            <Stack
              bg='blackAlpha.800'
              p={10}
              borderBottomRadius='md'
              direction={{ base: 'column', md: 'row' }}
              align='center'
              sx={{ marginTop: '0 !important' }}
            >
              <Image
                borderRadius='md'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                w='300px'
                h='400px'
                mr={{ base: 0, md: 12 }}
              />
              <Stack
                gap={5}
                p={{ base: 0, md: 10 }}
                w='100%'
              >
                <Stack>
                  <Heading as='h1'>{movie.title} {`(${getDate(movie.release_date)})`}</Heading>
                  <Text
                    size='md'
                    color='gray.400'
                  >Titulo original: {movie.original_title}</Text>
                </Stack>
                <Stack>
                  <Text
                  >
                    {movie.overview}
                  </Text>
                </Stack>
                <Stack
                  direction='column'
                  divider={<StackDivider borderColor='gray.500' />}
                >
                  <Heading
                    as='h2'
                    size='lg'
                  >Detalles:</Heading>
                  <Stack
                    direction='row'
                    align='center'
                  >
                    <Text>Generos: </Text>
                    <Stack
                      direction='row'
                      wrap='wrap'
                      align='center'
                    >
                      {getGenres(movie.genres).map((genre, index) => (
                        <Tag key={genre} my={2}>{genre}</Tag>
                      ))}
                    </Stack>
                  </Stack>
                  <Stack>
                    <Text>Duración: {getRuntime(movie.runtime)}</Text>
                  </Stack>
                  <Stack>
                    <Text>Produccion: {getProdCompanies(movie.production_companies)}</Text>
                  </Stack>
                  <Stack
                    direction='row'
                    align='center'
                    gap={1}
                  >
                    <Text>Puntuación:</Text>
                    <Stack
                      direction='row'
                      gap={-1} >
                      {getStars(movie.vote_average)}
                    </Stack>
                    <Text>{movie.vote_average.toFixed(1)} pts.</Text>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        }
      </Container>
    </Stack>
  )
}
