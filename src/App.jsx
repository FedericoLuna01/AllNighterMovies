import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { PopularMovies } from './components/PopularMovies'
import { RecentlyAdded } from './components/RecentlyAdded'

export const App = () => {
  return (
    <>
      <Hero />
      <PopularMovies />
      <RecentlyAdded />
      <Footer />
    </>
  )
}
