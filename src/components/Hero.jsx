import { Center, Heading, Stack } from '@chakra-ui/react'

export const Hero = () => {
  return (
    <Center
      bgColor='blackAlpha.800'
      bgImg={'url(/bg-hero.png)'}
      h='40vh'
      bgSize='cover'
      justify='center'
      gap={10}
      p={5}
      boxShadow='md'
    >
      <Stack
        align='center'
        textAlign='center'
        gap={2}
        p={8}
        bgColor='blackAlpha.800'
        w='fit-content'
        borderRadius={10}
      >
        <Heading
          as='h1'
          color='white'
        >
          Las mejores películas para All Nightear
        </Heading>
        <Heading
          as='h2'
          color='gray.600'
          size='md'
        >
          Buscá información para empezar tu jornada 8pm 4am.
        </Heading>
      </Stack>
    </Center>
  )
}
