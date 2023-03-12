import { useState } from 'react'

export const useRating = () => {
  const [movies, setMovies] = useState()
  const [filteredMovies, setFilteredMovies] = useState([])
  const [starsRating, setStarsRating] = useState()

  const handleRating = (rating) => {
    if (rating === starsRating) {
      setFilteredMovies(movies)
      setStarsRating(0)
      return
    }
    const filteredMovies = movies.filter((movie) => Math.floor(movie.vote_average) <= rating * 2 && Math.floor(movie.vote_average) >= rating * 2 - 2)
    setStarsRating(rating)
    setFilteredMovies(filteredMovies)
  }

  return {
    movies,
    setMovies,
    filteredMovies,
    setFilteredMovies,
    starsRating,
    handleRating,
    setStarsRating
  }
}
