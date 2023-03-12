import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Stack, useDisclosure, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom'

const MENU_ITEMS = [
  {
    label: 'Home',
    to: '/'
  },
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

export const MenuMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button colorScheme='orange' onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg='black'
          color='white'
        >
          <DrawerCloseButton />
          <DrawerBody>
            <Stack
              direction='column'
              align='center'
              py={12}
              gap={5}
            >
              {
                MENU_ITEMS.map(({ label, to }) => (
                  <Link as={ReachLink} onClick={onClose} key={label} to={to}>{label}</Link>
                ))
              }
            </Stack>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  )
}
