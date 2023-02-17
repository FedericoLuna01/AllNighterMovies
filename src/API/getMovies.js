export const getMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-AR`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getRecentMovies = async () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-AR&sort_by=release_date.asc`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getSearchedMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&language=es-AR&query=${query}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
