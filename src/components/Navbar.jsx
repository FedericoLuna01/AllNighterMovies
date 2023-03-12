import { Container, Heading, Hide, Link, Stack } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'
import { MenuMobile } from './MenuMobile'

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
      bg='black'
      h='84px'
      pos='sticky'
      top={0}
      color='white'
      zIndex={10}
      boxShadow='md'
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
              <Hide
                below='md'
              >
                <Stack
                  direction='row'
                  gap={4}
                >
                  {MENU_ITEMS.map(({ label, to }) => (
                    <Link key={label} as={ReachLink} to={to}>{label}</Link>
                  ))}
                </Stack>
              </Hide>
              <Hide
                above='md'
              >
                <MenuMobile />
              </Hide>
            </Stack>
        </Stack>
        </Container>
    </Stack>
  )
}
