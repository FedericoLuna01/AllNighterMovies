import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { PopularMovies } from './components/PopularMovies'
import { RecentlyAdded } from './components/RecentlyAdded'

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularMovies />
      <RecentlyAdded />
      <Footer />
    </>
  )
}
