import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Center, Container, Link, Stack, Text } from '@chakra-ui/react'

export const Movies = ({ children, title, icon, bg }) => {
  return (
    <Container
      maxW='container.xl'
      bg={bg}
    >
      <Stack
        align='center'
        p={16}
      >
        <Stack
          direction='row'
          justify='space-between'
          w='100%'
        >
          <Stack
            direction='row'
            align='center'
          >
            <Center
              w='30px'
              h='30px'
            >
              {icon}
            </Center>
            <Text
              fontWeight='bold'
              fontSize='md'
            >
              {title}
            </Text>
          </Stack>
          <Stack>
            <Link>
              Ver todas {<ArrowForwardIcon />}
            </Link>
          </Stack>
        </Stack>
        {children}
      </Stack>
    </Container>
  )
}
