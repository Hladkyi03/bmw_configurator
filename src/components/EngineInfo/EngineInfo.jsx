import React, { useContext, useState } from "react";
import { DispatchContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import cn from "classnames";

export const EngineInfo = ({
  engine,
  selectedEngine,
  selectedTransmission,
}) => {
  const dispatch = useContext(DispatchContext);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const transmission =
    engine.title === selectedEngine.title
      ? selectedTransmission
      : engine.transmission[0];

  const handleDropdownBtnClick = () => {
    setIsDropdownActive((prev) => !prev);
  };

  const handleRadioBtnClick = (currentEngine, currentTransmission) => {
    const action = {
      type: "addCarEngine",
      payload: {
        transmission: currentTransmission,
        engine: currentEngine,
      },
    };

    dispatch(action);
  };

  return (
    <div className="engine-overlay__engine" key={engine.title}>
      <h3 className="engine-configurator__model-name">{engine.title}</h3>

      <p className="engine-configurator__fuel-type">{engine.fuelType}</p>

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
                transmission.title === carTransmission.title &&
                selectedEngine.title === engine.title,
            })}
            key={carTransmission.title}
            onClick={() => handleRadioBtnClick(engine, carTransmission)}
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
            <p className="engine-configurator__info-list-caption">Fuel type</p>
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
            <p className="engine-configurator__info-list-caption">Drive unit</p>
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
  );
};
