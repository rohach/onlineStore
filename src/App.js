import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './common/Navbar/Nav';
import { BrowserRouter } from 'react-router-dom';
import Footer from './common/Footer/Footer';
import RoutesOnlineStore from './pages/Routes/Routes';
import Headroom from 'react-headroom';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Headroom>
          <Nav />
        </Headroom>
        <RoutesOnlineStore />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
