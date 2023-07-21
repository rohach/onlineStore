import React from 'react';
import './nav.css';
import { Button, Input, useDisclosure } from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { BiMenuAltRight } from 'react-icons/bi';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <section>
      <nav>
        <ul className="nav_ul">
          <Link to="/" className="logo">
            <label htmlFor="Logo" className="logo">
              <img src={logo} alt="Logo" />
              <span>Online Store</span>
            </label>
          </Link>
          <li className="nav_links">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_links">
            <Link to="products">Products</Link>
          </li>
          <li className="nav_links">
            <Link to="contact">Contact</Link>
          </li>
          <li className="nav_links">
            <i className="ri-shopping-cart-2-fill"></i>
          </li>
          <li className="nav_links">
            <i className="ri-user-line"></i>
          </li>
          <li className="nav_links">
            <Button ref={btnRef} onClick={onOpen}>
              <BiMenuAltRight size={'md'} />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
