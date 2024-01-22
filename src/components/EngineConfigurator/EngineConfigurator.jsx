import React from "react";
import "./EngineConfigurator.scss";
// import { Link, useSearchParams } from "react-router-dom";
// import { getSearchWith } from "../../utils/getSearchWith";
import { useState } from "react";
import cn from "classnames";

export const EngineConfigurator = ({ carName, engineTypes }) => {
  // const [searchParams] = useSearchParams();

  const [selectedEngine, setSelectedEngine] = useState(engineTypes[0]);
  const [selectedTransmission, setSelectedTransmission] = useState(
    engineTypes[0].transmission[0]
  );
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  // const handleBtnClick = () => {
  //   return getSearchWith(searchParams, "category", "tttt").toString();
  // };

  const handleDropdownBtnClick = () => {
    setIsDropdownActive((prev) => !prev);
  };

  const handleRadioBtnClick = (currentTransmission) => {
    setSelectedTransmission(currentTransmission);
  };

  console.log(setSelectedEngine);

  return (
    <div className="engine-configurator">
      <h2 className="engine-configurator__title">Двигун</h2>

      <div className="engine-configurator__wrapper">
        <h3 className="engine-configurator__model-name">{carName}</h3>

        <p className="engine-configurator__fuel-type">
          {selectedEngine.fuelType}
        </p>

        <p className="engine-configurator__start-price">
          {`Від ${selectedEngine.price + selectedTransmission.price} грн`}
        </p>

        <h4 className="engine-configurator__transmission-title">Трансмісія</h4>

        <p className="engine-configurator__transmission-type">
          {selectedTransmission.title}
        </p>

        <div className="engine-configurator__buttons-wrapper">
          {selectedEngine.transmission.map((carTransmission) => (
            <button
              type="radio"
              name="car-transmission"
              className={cn("engine-configurator__radio-button", {
                "engine-configurator__radio-button--active":
                  selectedTransmission.title === carTransmission.title,
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
                {selectedEngine.fuelType}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Engine power
              </p>
              <p className="engine-configurator__info-list-info">
                {`${selectedEngine.horsePowers} (h.p.)`}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Fuel consumption
              </p>
              <p className="engine-configurator__info-list-info">
                {`${selectedTransmission.fuelConsumption}l/ 100km`}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Transmission
              </p>
              <p className="engine-configurator__info-list-info">
                {selectedTransmission.title}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Drive unit
              </p>
              <p className="engine-configurator__info-list-info">
                {selectedEngine.driveUnit}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Acceleration
              </p>
              <p className="engine-configurator__info-list-info">
                {`${selectedTransmission.acceleration} s`}
              </p>
            </li>

            <li className="engine-configurator__info-list-item">
              <p className="engine-configurator__info-list-caption">
                Emissions CO2
              </p>
              <p className="engine-configurator__info-list-info">
                {`${selectedTransmission.emissionsCO2} g/km`}
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
