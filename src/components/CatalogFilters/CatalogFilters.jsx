import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { bmwCars } from "../../data/bmwCars";
import { bmwSeries } from "../../data/bmwSeries";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./CatalogFilters.scss";
import { getSearchWith } from "../../utils/getSearchWith";

export const CatalogFilters = () => {
  const [searchParams] = useSearchParams();

  const [isSortListOpened, setIsSortListOpened] = useState(false);

  const totalModelsCount = bmwCars.reduce((accumulator, currentSeries) => {
    return accumulator + currentSeries.models.length;
  }, 0);

  const isExtraSmall = useMediaQuery("(max-width: 767px)");

  const serieValue = searchParams.get('serie') || "";

  const handleBlur = () => {
    setTimeout(() => {
      setIsSortListOpened(false);
    }, 150);
  }

  const handleOnClick = (param, value) => {
    return getSearchWith(searchParams, param, value).toString();
  }

  const handleOnFocus = () => {
    setIsSortListOpened(true);
  }

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

        {!isExtraSmall ? (<ul className="catalog-filters__series">
          {bmwSeries.map((serie) => (
            <li className="catalog-filters__series-item" key={serie}>
              <button className="catalog-filters__series-button">
                <Link className="catalog-filters__series-link">{serie}</Link>
              </button>
            </li>
          ))}
        </ul>) : (
          <div className="catalog-filters__input-wrapper">
            <input
              type="text"
              className="catalog-filters__input"
              onFocus={handleOnFocus}
              onBlur={() => handleBlur()}
              placeholder="Serie"
              value={serieValue}
              readOnly
            />

            <svg
              className="catalog-filters__input-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4714 5.52864C12.7317 5.78899 12.7317 6.2111 12.4714
                6.47145L8.47136 10.4714C8.21101 10.7318 7.7889 10.7318
                7.52855 10.4714L3.52855 6.47144C3.2682 6.2111 3.2682
                5.78899 3.52855 5.52864C3.7889 5.26829 4.21101 5.26829
                4.47136 5.52864L7.99996 9.05723L11.5286 5.52864C11.7889
                5.26829 12.211 5.26829 12.4714 5.52864Z"
                fill="#B4BDC4"
              />
            </svg>

            {isSortListOpened && (
              <ul className="catalog-filters__dropdown">
                {bmwSeries.map(param => (
                  <li className="catalog-filters__dropdown-item" key={param}>
                    <Link
                      className="catalog-filters__dropdown-link"
                      to={{ search: handleOnClick('serie', param) }}
                    >
                      {param}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
