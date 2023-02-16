import { Grid } from '@chakra-ui/react'
import { Movies } from '../layouts/Movies.jsx'
import { IconFlame } from '../icons/Icons'
import { getMovies } from '../API/getMovies.js'
import { useEffect, useState } from 'react'
import { MoviePoster } from './MoviePoster.jsx'

export const PopularMovies = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getPopularMovies = async () => {
      const data = await getMovies()
      setMovies(data.results.slice(0, 9))
    }
    getPopularMovies()
  }, [])

  return (
    <Movies
      title='Películas populares'
      linkTitle='Ver todas...'
      icon={<IconFlame size='20' color='#f00'/>}
      to='descubrir'
    >
      <Grid
          templateColumns='repeat(6, 1fr)'
          templateRows='repeat(2, 1fr)'
          gap={5}
        >
          {
            movies.map((movie, index) => (
              <MoviePoster key={movie.id} movie={movie} index={index} />
            ))
          }
        </Grid>
    </Movies>
  )
}
