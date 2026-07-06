import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/db.json";
import beansLogoDark from "../logo/Beans_logo_dark.svg";

const ProductDetails = () => {
  const { type, id } = useParams();

  const list = type === "bestsellers" ? data.bestsellers : data.coffee;
  const item = list[+id];
  
  if (!item) {
    return (
      <section className="product">
        <div className="container">
          <div className="title">Product not found</div>
        </div>
      </section>
    );
  }

  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-1">
            <img className="product__img" src={item.url} alt={item.name} />
          </div>

          <div className="col-lg-4">
            <div className="title">About it</div>
            <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />

            <div className="product__text">
              <p>
                <span>Country:</span> {item.country}
              </p>
              <p>
                <span>Description:</span> {item.description}
              </p>
              <p className="product__price">
                <span>Price:</span> {item.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
