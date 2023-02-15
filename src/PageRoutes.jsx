import { Route, Routes } from 'react-router-dom'
import { App } from './App'
import { Discover } from './pages/Discover'
import { Search } from './pages/Search'

export const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/descubrir' element={<Discover />} />
        <Route path='/buscar' element={<Search />} />
      </Routes>
    </>
  )
}
