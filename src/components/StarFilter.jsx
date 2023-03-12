import { StarIcon } from '@chakra-ui/icons'
import { Stack, Text } from '@chakra-ui/react'

const STARS = [1, 2, 3, 4, 5]

export const StarFilter = ({ handleRating, starsRating }) => {
  return (
    <Stack
          direction='row'
          align='center'
          py={5}
        >
          <Text color='white'>Filtrar por:</Text>
          <Stack
            direction='row'
          >
            {
              STARS.map((star) => (
                <StarIcon
                  key={star}
                  onClick={() => handleRating(star)}
                  color={star <= starsRating ? 'yellow.500' : 'gray.500'}
                  _hover={{ color: 'yellow.300' }}
                  cursor='pointer'
                />
              ))
            }
          </Stack>
        </Stack>
  )
}
