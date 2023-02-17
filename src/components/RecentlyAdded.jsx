import { Grid } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getRecentMovies } from '../API/getMovies'
import { StackIcon } from '../icons/Icons'
import { Movies } from '../layouts/Movies'
import { MoviePoster } from './MoviePoster'

export const RecentlyAdded = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getRecentMovie = async () => {
      const data = await getRecentMovies()
      setMovies(data.results.slice(0, 6))
    }
    getRecentMovie()
  }, [])
  console.log(movies)

  return (
    <Movies
      title='Películas recientemente añadidas'
      linkTitle=''
      bg='blackAlpha.800'
      icon={<StackIcon color='#f00' />}
      to={'recientes'}
    >
      <Grid
        templateColumns='repeat(6, 1fr)'
        gap={5}
      >
        {
          movies && movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie}/>
          ))
        }
      </Grid>
    </Movies>
  )
}
