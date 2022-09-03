import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Header from '../components/Header'

const config = {
  colors: {
    accent_color: "#68D391",
    light_color: "#4A5568",
    medium_color: "#2D3748",
    dark_color: "#171923"
  }
}

const theme = extendTheme(config)

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp