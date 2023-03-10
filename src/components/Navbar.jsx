import { Button, Container, Heading, Link, Stack } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const MENU_ITEMS = [
  {
    label: 'Descubrir',
    to: '/descubrir'
  },
  {
    label: 'Recientes',
    to: '/recientes'
  },
  {
    label: 'Buscar',
    to: '/buscar'
  }

]

export const Navbar = () => {
  return (
    <Stack
      backdropFilter='opacity(80%) brightness(0)'
      h='80px'
      pos='fixed'
      w='100%'
      color='white'
      px={12}
      zIndex={10}
      >
      <Container
        maxW='container.xl'
        h='100%'
      >
        <Stack
          justify='space-between'
          direction='row'
          align='center'
          h='100%'
        >
          <Stack>
            <Heading
              color='orange.600'
              as={ReachLink}
              to='/'
              textAlign='center'
            >
              All Nighter
            </Heading>
          </Stack>
            <Stack
              direction='row'
              align='center'
              gap={4}
            >
              <Stack
                direction='row'
                gap={4}
              >
                {MENU_ITEMS.map(({ label, to }) => (
                  <Link key={label} as={ReachLink} to={to}>{label}</Link>
                ))}
              </Stack>
              <Stack
                direction='row'
                align='center'
              >
                <Button variant='outline' colorScheme='orange'>Registrarse</Button>
              </Stack>
            </Stack>
        </Stack>
        </Container>
    </Stack>
  )
}
