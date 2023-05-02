import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '../theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
