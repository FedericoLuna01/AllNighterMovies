import { Container, Stack } from '@chakra-ui/react'

export const AllMovies = ({ children }) => {
  return (
    <Stack
      bg='blackAlpha.800'
      align='center'
      minH='100vh'
    >
      <Container
        maxW='container.xl'
      >
        <Stack
          pt={24}
        >
          {children}
        </Stack>
      </Container>
    </Stack>
  )
}
