import { Container, Image, Stack, Text } from '@chakra-ui/react'
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
    return genresArray.join(', ')
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
      py={32}
      bg='blackAlpha.800'
      minH='100vh'
      justify='center'
      color='white'
    >
      <Container
        maxW='container.xl'
      >
        {
          movie &&
          <Stack
            direction='row'
          >
              <Stack
                w='500px'
              >
                <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </Stack>
              <Stack
                justify='space-between'
              >
                <Text
                  fontSize='2xl'
                >
                  <strong>{movie.title}</strong> {`(${getDate(movie.release_date)})`}
                </Text>
                <Stack>
                  <Text>Duración: {getRuntime(movie.runtime)}</Text>
                  <Text>Generos: {getGenres(movie.genres)}</Text>
                </Stack>
                <Text
                  fontSize='md'
                  >
                  {movie.overview}
                </Text>
                <Text>Produccion: {getProdCompanies(movie.production_companies)}</Text>
                <Stack
                  direction='row'
                  align='center'
                  gap={1}
                >
                  <Text
                    fontSize='md'
                  >
                    Puntuación:
                  </Text>
                  <Stack direction='row' gap={-1} >{getStars(movie.vote_average)}</Stack>
                  <Text>{movie.vote_average.toFixed(1)} pts.</Text>
                </Stack>
              </Stack>
          </Stack>
        }
      </Container>
    </Stack>
  )
}
