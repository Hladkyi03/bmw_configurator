import React from "react";
import { Link } from "react-router-dom";
import { bmwCars } from "../../data/bmwCars";
import { bmwSeries } from "../../data/bmwSeries";
import "./CatalogFilters.scss";

export const CatalogFilters = () => {
  const totalModelsCount = bmwCars.reduce((accumulator, currentSeries) => {
    return accumulator + currentSeries.models.length;
  }, 0);

  return (
    <div className="catalog-filters">
      <div className="container container--max-width-1008">
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

        <p className="catalog-filters__models-count">
          {`${totalModelsCount} models`}
          </p>

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
