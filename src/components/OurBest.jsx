import React from "react";
import { Link } from "react-router-dom";
import data from "../data/db.json";

const OurBest = () => {
  const items = data?.bestsellers ?? [];

  return (
    <section className="best">
      <div className="container">
        <div className="title">Our best</div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="best__wrapper">
              {items.map((item, index) => (
                <Link
                  key={`${item.name}-${index}`}
                  to={`/product/bestsellers/${index}`}
                  className="best__item"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={item.url} alt={item.name} />
                  <div className="best__item-title">{item.name}</div>
                  <div className="best__item-price">{item.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBest;
