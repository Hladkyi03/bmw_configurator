import React from "react";
import { Link } from "react-router-dom";
import { bmwSeries } from "../../data/bmwSeries";
import "./CatalogFilters.scss";

export const CatalogFilters = () => {
  return (
    <div className="catalog-filters">
      <div className="container">
        <h2 className="catalog-filters__title">Choose your BMW</h2>

        <p className="catalog-filters__subtitle">Filter</p>

        <div className="catalog-filters__buttons">
          <button className="catalog-filters__button">
            <span className="catalog-filters__cross"></span>

            <Link className="catalog-filters__link">Plug-in hybrid</Link>
          </button>

          <button className="catalog-filters__button">
            <span className="catalog-filters__cross"></span>

            <Link className="catalog-filters__link">Electric</Link>
          </button>

          <button className="catalog-filters__button">
            <span className="catalog-filters__cross"></span>
            <Link className="catalog-filters__link">BMW M</Link>
          </button>

          <button className="catalog-filters__button">
            <span className="catalog-filters__cross"></span>
            <Link className="catalog-filters__link">BMW i</Link>
          </button>
        </div>

        <p className="catalog-filters__models-count">1</p>

        <ul className="catalog-filters__series">
          {bmwSeries.map((serie) => (
            <li className="catalog-filters__series-item" key={serie}>
              <button className="catalog-filters__series-button">
                <Link className="catalog-filters__series-link">{serie}</Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
