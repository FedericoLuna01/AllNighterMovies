import { SearchIcon } from '@chakra-ui/icons'
import { Button, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getMovies, getSearchedMovies } from '../API/getMovies'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { MovieGrid } from '../components/MovieGrid'
import { NothingToShow } from '../components/NothingToShow'
import { Pagination } from '../components/Pagination'
import { StarFilter } from '../components/StarFilter'
import { useRating } from '../hooks/useRating'
import { AllMovies } from '../layouts/AllMovies'

export const Search = () => {
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [inputMovie, setInputMovie] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchPage, setSearchPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const {
    movies,
    setMovies,
    filteredMovies,
    setFilteredMovies,
    starsRating,
    handleRating,
    setStarsRating
  } = useRating()

  const getPopMovies = async () => {
    setIsLoading(true)
    const data = await getMovies(actualPage)
    setTotalPages(500)
    setMovies(data.results)
    setFilteredMovies(data.results)
    setStarsRating(0)
    setIsLoading(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSearching(true)
    if (inputMovie === '') return
    setIsLoading(true)
    const data = await getSearchedMovies(inputMovie, searchPage)
    data.results.sort((a, b) => b.popularity - a.popularity)
    setTotalPages(data.total_pages)
    setMovies(data.results)
    setFilteredMovies(data.results)
    setIsLoading(false)
  }

  const handleSearchPage = async () => {
    if (!isSearching) return
    const data = await getSearchedMovies(inputMovie, searchPage)
    setStarsRating(0)
    setMovies(data.results)
    setFilteredMovies(data.results)
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
        direction={{ base: 'column-reverse', md: 'row' }}
        align='center'
        justify='space-between'
        w='100%'
      >
        <StarFilter
          handleRating={handleRating}
          starsRating={starsRating}
        />
        <Stack
          as='form'
          direction={{ base: 'column', md: 'row' }}
          onSubmit={(e) => handleSubmit(e)}
          align='center'
          w='70%'
        >
          <InputGroup
            w='100%'
          >
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input
              placeholder='Busca una pelicula'
              color='white'
              onChange={(e) => setInputMovie(e.target.value)}
              value={inputMovie}
              _focus={{ boxShadow: 'none', borderColor: 'orange.500' }}
            />
          </InputGroup>
          <Button
            w={{
              base: '100%',
              md: '20%'
            }}
            colorScheme='orange'
            type='submit'
          >
            Buscar
          </Button>
        </Stack>
      </Stack>
      <Stack>
      {
        isLoading
          ? <LoadingSpinner bg='trasparent' />
          : <>
          <MovieGrid movies={filteredMovies} />
          {
            filteredMovies.length === 0 && !isLoading
              ? (
              <NothingToShow />
                )
              : movies && (
              <Pagination
                actualPage={isSearching ? searchPage : actualPage}
                setActualPage={isSearching ? setSearchPage : setActualPage}
                totalPages={totalPages}
              />
              )
          }
          </>
      }

      </Stack>
    </AllMovies>
  )
}
