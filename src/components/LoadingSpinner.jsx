import { Spinner, Stack } from '@chakra-ui/react'

export const LoadingSpinner = ({ bg = 'blackAlpha.800' }) => {
  return (
    <Stack
      minH='100vh'
      align='center'
      justify='center'
      bg={bg}
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='orange.700'
        size='xl'
      />
    </Stack>
  )
}
