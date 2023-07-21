import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './common/Navbar/Nav';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Testimonial from './pages/Testimonial/Testimonial';
import Reason from './pages/Reason/Reason';
import Footer from './common/Footer/Footer';
import RoutesOnlineStore from './pages/Routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Nav />
        <RoutesOnlineStore />
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
