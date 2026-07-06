import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InnerLayout from './layouts/InnerLayout';
import OurCoffee from './pages/OurCoffee';
import ForYourPleasure from './pages/ForYourPleasure';
import ProductDetails from './pages/ProductDetails';

export default function App() {
  return (
    <Routes>
      {/* Home без общего внутреннего баннера */}
      <Route index element={<Home />} />

      {/* Внутренние страницы */}
      <Route path="/" element={<InnerLayout />}>
        <Route path="our-coffee" element={<OurCoffee />} />
        <Route path="for-your-pleasure" element={<ForYourPleasure />} />
        <Route path="product/:type/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}