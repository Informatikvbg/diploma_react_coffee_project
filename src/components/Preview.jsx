import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo/Logo.svg';
import beansLogo from '../logo/Beans_logo.svg';
import Menu from './Menu';

const Preview = () => {
  return (
    <div className="preview">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <header>
                <Menu />
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h1 className="title-big">Everything You Love About Coffee</h1>
            <img className="beanslogo" src={beansLogo} alt="Beans logo" />
            <div className="preview__subtitle">We makes every day full of energy and taste</div>
            <div className="preview__subtitle preview__subtitle-small">Want to try our beans?</div>
            <Link to="/our-coffee" className="preview__btn">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;