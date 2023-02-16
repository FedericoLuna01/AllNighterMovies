import { StarIcon } from '@chakra-ui/icons'

export const getStars = (vote) => {
  const stars = []
  vote = Math.round(vote / 2)
  for (let i = 0; i < 5; i++) {
    if (i < vote) {
      stars.push(<StarIcon key={i} color='yellow.500' />)
    } else {
      stars.push(<StarIcon key={i} color='gray.500' />)
    }
  }
  return stars
}
