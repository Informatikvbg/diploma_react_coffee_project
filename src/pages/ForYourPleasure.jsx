import React from 'react';
import data from '../data/db.json';
import coffee from '../logo/Beans_logo_dark.svg'; 
import beansLogoDark from '../logo/Beans_logo_dark.svg';
import coffeeGirl from '../img/coffee.png';

const ForYourPleasure = () => {
  const items = (data?.goods ?? []).slice(0, 3);

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-2">
            <img className="shop__girl" src={coffeeGirl} alt="girl" />
          </div>

          <div className="col-lg-4">
            <div className="title">About our goods</div>
            <img className="beanslogo" src={coffee} alt="Beans logo" />
            <div className="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions.
              <br />
              As greatly removed calling pleased improve an. Last ask him cold feel met spot shy
              want. Children me laughing we prospect answered followed. At it went is song that
              held help face.
            </div>
          </div>
        </div>

        <div className="line"></div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              {items.map((item, i) => (
                <div className="shop__item" key={`${item.name}-${i}`}>
                  <img src={item.url} alt={item.name} />
                  <div className="shop__item-title">{item.name}</div>
                  <div className="shop__item-price">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForYourPleasure;