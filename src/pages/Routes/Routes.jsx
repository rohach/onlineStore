import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products';

const RoutesOnlineStore = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default RoutesOnlineStore;
