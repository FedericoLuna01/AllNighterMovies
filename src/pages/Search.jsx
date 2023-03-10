import { Input, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getMovies, getSearchedMovies } from '../API/getMovies'
import { MovieGrid } from '../components/MovieGrid'
import { Pagination } from '../components/Pagination'
import { AllMovies } from '../layouts/AllMovies'

export const Search = () => {
  const [movies, setMovies] = useState()
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [inputMovie, setInputMovie] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchPage, setSearchPage] = useState(1)

  const getPopMovies = async () => {
    const data = await getMovies(actualPage)
    setTotalPages(data.total_pages)
    setMovies(data.results)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (inputMovie === '') return
    setIsSearching(true)
    const data = await getSearchedMovies(inputMovie, searchPage)
    data.results.sort((a, b) => b.popularity - a.popularity)
    setTotalPages(data.total_pages)
    setMovies(data.results)
  }

  const handleSearchPage = async () => {
    if (!isSearching) return
    const data = await getSearchedMovies(inputMovie, searchPage)
    setMovies(data.results)
  }

  useEffect(() => {
    getPopMovies()
  }, [actualPage])

  useEffect(() => {
    handleSearchPage()
  }, [searchPage])

  return (
    <AllMovies>
      <Stack
        as='form'
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          placeholder='Busca una pelicula'
          bg='white'
          onChange={(e) => setInputMovie(e.target.value)}
          value={inputMovie}
          mb={5}
        />
      </Stack>
        <MovieGrid movies={movies} />
      <Stack
        align='center'
        justify='center'
        py={5}
      >
        {
          movies &&
          <Pagination
            actualPage= { isSearching ? searchPage : actualPage }
            setActualPage={ isSearching ? setSearchPage : setActualPage }
            totalPages={totalPages}
          />
        }
      </Stack>
    </AllMovies>
  )
}
