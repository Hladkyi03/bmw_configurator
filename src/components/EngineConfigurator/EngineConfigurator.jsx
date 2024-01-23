import React, { useContext } from "react";
import "./EngineConfigurator.scss";
// import { Link, useSearchParams } from "react-router-dom";
// import { getSearchWith } from "../../utils/getSearchWith";
import { useState } from "react";
import cn from "classnames";
import { DispatchContext, StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";

export const EngineConfigurator = ({ setIsOverlayOpen }) => {
  // const [searchParams] = useSearchParams();

  const carConfig = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const { engine, transmission } = carConfig;

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // const handleBtnClick = () => {
  //   return getSearchWith(searchParams, "category", "tttt").toString();
  // };

  const handleOpenBtnClick = () => {
    document.body.style.overflow = "hidden";
    setIsOverlayOpen(true);
  }

  const handleDropdownBtnClick = () => {
    setIsDropdownActive((prev) => !prev);
  };

  const handleRadioBtnClick = (currentTransmission) => {
    const action = {
      type: "addCarTransmission",
      payload: { transmission: currentTransmission },
    }

    dispatch(action);
  };

  return (
    <div className="engine-configurator">
      <h2 className="engine-configurator__title">Двигун</h2>

      <div className="engine-configurator__wrapper">
        <h3 className="engine-configurator__model-name">
          {engine.title}
        </h3>

        <p className="engine-configurator__fuel-type">
          {engine.fuelType}
        </p>

        <p className="engine-configurator__start-price">
          {`Від ${engine.price + transmission.price} грн`}
        </p>

        <h4 className="engine-configurator__transmission-title">Трансмісія</h4>

        <p className="engine-configurator__transmission-type">
          {transmission.title}
        </p>

        <div className="engine-configurator__buttons-wrapper">
          {engine.transmission.map((carTransmission) => (
            <button
              type="radio"
              name="car-transmission"
              className={cn("engine-configurator__radio-button", {
                "engine-configurator__radio-button--active":
                  transmission.title === carTransmission.title,
              })}
              key={carTransmission.title}
              onClick={() => handleRadioBtnClick(carTransmission)}
            >
              {carTransmission.title}
            </button>
          ))}
        </div>

        <button
          className="engine-configurator__button"
          onClick={handleDropdownBtnClick}
        >
          Трансмісія та Технічні дані
        </button>

        {isDropdownActive && (
          <ul className="engine-configurator__info-list">
            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Fuel type
              </p>
              <p className="engine-configurator__info-list-info">
                {engine.fuelType}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Engine power
              </p>
              <p className="engine-configurator__info-list-info">
                {`${engine.horsePowers} (h.p.)`}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Fuel consumption
              </p>
              <p className="engine-configurator__info-list-info">
                {`${transmission.fuelConsumption}l/ 100km`}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Transmission
              </p>
              <p className="engine-configurator__info-list-info">
                {transmission.title}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Drive unit
              </p>
              <p className="engine-configurator__info-list-info">
                {engine.driveUnit}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Acceleration
              </p>
              <p className="engine-configurator__info-list-info">
                {`${transmission.acceleration} s`}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Emissions CO2
              </p>
              <p className="engine-configurator__info-list-info">
                {`${transmission.emissionsCO2} g/km`}
              </p>
            </li>
          </ul>
        )}
      </div>

      <button
        className="engine-configurator__overlay-button"
        onClick={handleOpenBtnClick}
      >
        Подивитись всі варіанти виконання
      </button>
    </div>
  );
};