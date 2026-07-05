import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import OurCoffee from './pages/OurCoffee';
import ForYourPleasure from './pages/ForYourPleasure';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      {/* <Route path="/" element={<MainLayout />}>
        <Route path="our-coffee" element={<OurCoffee />} /> */}
        {/* <Route path="product/:id" element={<ProductDetails />} /> */}
        {/* <Route path="for-your-pleasure" element={<ForYourPleasure />} />
      </Route> */}
    </Routes>
  );
}