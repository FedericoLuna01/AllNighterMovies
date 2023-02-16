import { Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Discover } from './pages/Discover'
import { MovieInfo } from './pages/MovieInfo'
import { Recent } from './pages/Recent'
import { Search } from './pages/Search'

export const PageRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/descubrir' element={<Discover />} />
        <Route path='/buscar' element={<Search />} />
        <Route path='/recientes' element={<Recent />} />
        <Route path='/pelicula/:id' element={<MovieInfo movie />} />
      </Routes>
    </>
  )
}
