import { Center, Heading, Stack } from '@chakra-ui/react'
import { TicketIcon } from '../icons/Icons'

export const NothingToShow = () => {
  return (
    <Center
      minH='60vh'
    >
      <Stack
        p={8}
        borderColor='orange.700'
        borderWidth={5}
        borderRadius='xl'
        maxW='400px'
        align='center'
        justify='center'
      >
        <Heading
          color='white'
          align='center'
        >
          No se encontraron películas.
        </Heading>
        <TicketIcon />
      </Stack>
    </Center>
  )
}
