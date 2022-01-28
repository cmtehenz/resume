import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    black: {
      "900": "#000000"
    }
  },
  fonts: {
    heading: 'Merriweather',
    body: 'Merriweather'
  },
  styles: {
    global: {
      body: {
        bg: 'black.900',
        color: '#837E9F',
      }
    }
  }
});