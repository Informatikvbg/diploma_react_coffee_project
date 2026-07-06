import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import data from "../data/db.json";
import beansLogoDark from "../logo/Beans_logo_dark.svg";
import coffeeGirl from "../img/coffee_girl.jpg";

const OurCoffee = () => {
  const [items, setItems] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("all"); // all | Brazil | Kenya | Columbia

    useEffect(() => {
    const t = setTimeout(() => {
      setItems(data?.coffee ?? []);
      setLoading(false);
    }, 600); // имитация запроса
        return () => clearTimeout(t);
  }, []);

  
  // 1) Нормализуем строку поиска
  const normalizedTerm = term.trim().toLowerCase();
  
  // 2) Фильтрация
  const filteredItems = items.filter((item) => {
    const matchesTerm = item.name.toLowerCase().includes(normalizedTerm);
    let matchesCountry = true;
    if (country !== "all") {
      matchesCountry = item.country === country;
    }
    return matchesTerm && matchesCountry;
  });
  
  if (loading) return <Spinner />;
  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 offset-2">
            <img className="shop__girl" src={coffeeGirl} alt="girl" />
          </div>

          <div className="col-lg-4">
            <div className="title">About our beans</div>
            <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
            <div className="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention
              <br />
              so questions.
              <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel
              <br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went
              <br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div className="line"></div>

        {/* блок поиска/фильтра */}
        <div className="row">
          <div className="col-lg-4 offset-2">
            <form
              action="#"
              className="shop__search"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="shop__search-label" htmlFor="filter">
                Looking for
              </label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                className="shop__search-input"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </form>
          </div>

          <div className="col-lg-4">
            <div className="shop__filter">
              <div className="shop__filter-label">Or filter</div>
              <div className="shop__filter-group">
                <button type="button" className={`shop__filter-btn ${country === 'Brazil' ? 'active' : ''}`} onClick={() => setCountry('Brazil')}>Brazil</button>
                <button type="button" className={`shop__filter-btn ${country === 'Kenya' ? 'active' : ''}`} onClick={() => setCountry('Kenya')}>Kenya</button>
                <button type="button" className={`shop__filter-btn ${country === 'Columbia' ? 'active' : ''}`} onClick={() => setCountry('Columbia')}>Columbia</button>
                <button type="button" className={`shop__filter-btn ${country === 'all' ? 'active' : ''}`} onClick={() => setCountry('all')}>All</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="shop__wrapper">
              {filteredItems.map((item, i) => (
                <Link
                  key={`${item.name}-${i}`}
                  to={`/product/coffee/${i}`}
                  className="shop__item"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img src={item.url} alt={item.name} />
                  <div className="shop__item-title">{item.name}</div>
                  <div className="shop__item-country">{item.country}</div>
                  <div className="shop__item-price">{item.price}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoffee;
