import { Button, Heading, Input, Link, Stack, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <Stack
      as='footer'
      direction='row'
      justify='space-evenly'
      gap={10}
      p={16}
      bgImage='url(/spiderman-footer.jpeg)'
      bgSize='cover'
    >
      <Stack
        w='400px'
      >
        <Heading color='white'>Deseas comentar?</Heading>
        <Text
          color='gray.300'
        >
          Te gusta una película? Comparte lo que piensas con otra gente. Estos son algunos beneficios de ser miembro.
        </Text>
        <Stack
          color='white'
          fontWeight='bold'
        >
          <Text>✔ Comparte tus opiniones</Text>
          <Text>✔ Guarda tu coleccion de películas</Text>
          <Text>✔ Guarda tus películas favoritas</Text>
        </Stack>
      </Stack>
      <Stack>
        <Heading
          as='h2'
          color='white'
        >
          Crea una cuenta
        </Heading>
        <Stack
          as='form'
        >
          <Stack
            direction='row'
          >
            <Input bg='white' placeholder='Primer nombre' />
            <Input bg='white' placeholder='Apellido' />
          </Stack>
          <Input bg='white' placeholder='Email' />
          <Input bg='white' placeholder='Contraseña' />
          <Stack
            fontWeight='bold'
            direction='row'
            align='center'
            justify='space-between'
          >
            <Stack
              direction='row'
            >
              <Text color='white'>Ya tienes una cuenta?</Text>
              <Link color='orange.600'>Ingresá</Link>
            </Stack>
            <Button
              w='30%'
              colorScheme='orange'
            >
              Ingresar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
