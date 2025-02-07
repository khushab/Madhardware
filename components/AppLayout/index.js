import { Logo } from 'components/Logo'
import { Center, Container } from '@chakra-ui/react'

export function AppLayaout ({ children }) {
  return (
    <Container maxW='container.xl' w='container.xl'>
      <Center pt={10} pb={10}>
        <Logo width='250' height='210' />
      </Center>
      <main>
        {children}
      </main>
      <footer />
    </Container>
  )
}
