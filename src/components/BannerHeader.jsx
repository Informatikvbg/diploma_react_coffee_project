import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';

const titleMap = {
  '/our-coffee': 'Our Coffee',
  '/for-your-pleasure': 'For your pleasure',
};

const BannerHeader = () => {
  const { pathname } = useLocation();
  const title = titleMap[pathname] || 'Coffee House';

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <header>
              <Menu />
            </header>
          </div>
        </div>
        <h1 className="title-big">{title}</h1>
      </div>
    </div>
  );
};

export default BannerHeader;