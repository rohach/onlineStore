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
    <>
      <nav>
        <ul className="nav_ul">
          <Link to="/" className="logo">
            <label htmlFor="Logo" className="logo">
              <img src={logo} alt="Logo" />
              <span>
                Online <span style={{ color: 'var(--orange)' }}>Store</span>
              </span>
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
                <DrawerHeader>
                  Online <span style={{ color: 'var(--orange)' }}>Store</span>
                </DrawerHeader>

                <DrawerBody>
                  <Button>
                    <Link to="/">Home</Link>
                  </Button>
                  <br /> <br />
                  <Button>
                    <Link to="/products">Products</Link>
                  </Button>
                  <br /> <br />
                  <Button>
                    <Link to="/contact">Contact</Link>
                  </Button>
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    <i className="ri-shopping-cart-2-fill"></i>
                  </Button>
                  <Button>
                    <i className="ri-user-line" onClick={onClose}></i>
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
