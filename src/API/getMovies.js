export const getMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=490927b5afb38df215e97d2db37d4f2a&page=${page}&language=es-AR`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getRecentMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=490927b5afb38df215e97d2db37d4f2a&page=${page}&language=es-AR&sort_by=primary_release_date.desc`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export const getSearchedMovies = async (query, page) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=490927b5afb38df215e97d2db37d4f2a&page=${page}&language=es-AR&query=${query}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
