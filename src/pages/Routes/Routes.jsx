import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import SingleProduct from '../Products/Singleproduct';

const RoutesOnlineStore = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productdetail/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default RoutesOnlineStore;
