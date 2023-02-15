import { Button, Heading, Link, Stack } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const MENU_ITEMS = [
  {
    label: 'Descubrir',
    to: '/descubrir'
  },
  {
    label: 'Buscar',
    to: '/buscar'
  },
  {
    label: 'Iniciar Sesion',
    to: '/'
  }
]

export const Navbar = () => {
  return (
    <Stack
      backdropFilter='opacity(80%) brightness(0)'
      direction='row'
      align='center'
      justify='space-between'
      h='80px'
      pos='fixed'
      w='100%'
      color='white'
      px={12}
      zIndex={10}
    >
      <Stack>
        <Heading
          as={ReachLink}
          to='/'
        >Peliculas</Heading>
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
  )
}
