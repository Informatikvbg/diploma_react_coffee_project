import React from 'react';
import {Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import OurCoffee from './components/OurCoffee';
import ForYourPleasure from './components/ForYourPleasure';
import ProductDetails from './components/ProductDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="our-coffee" element={<OurCoffee />} />
        {/* <Route path="product/:id" element={<ProductDetails />} /> */}
        <Route path="for-your-pleasure" element={<ForYourPleasure />} />
      </Route>
    </Routes>
  );
}