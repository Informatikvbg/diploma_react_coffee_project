import React from 'react';
import { Outlet } from 'react-router-dom';
import BannerHeader from '../components/BannerHeader';
import Footer from '../components/Footer';

const InnerLayout = () => {
  return (
    <>
      <BannerHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default InnerLayout;