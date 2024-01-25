import React, { useContext, useState } from "react";
import { DispatchContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export const EngineInfo = ({
  engine,
  selectedEngine,
  selectedTransmission,
}) => {
  const dispatch = useContext(DispatchContext);

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const { t } = useTranslation();

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
    <div
      className={cn("engine-overlay__engine", {
        "engine-overlay__engine--active": engine.title === selectedEngine.title,
      })}
      key={engine.title}
    >
      <h3 className="engine-configurator__model-name">{engine.title}</h3>

      <p className="engine-configurator__fuel-type">{engine.fuelType}</p>

      <p className="engine-configurator__start-price">
        {`${t("configPageFrom")} ${engine.price + transmission.price} ${t(
            "configPageCurrency"
          )}`}
      </p>

      <h4 className="engine-configurator__transmission-title">
        {t("configPageTransmission")}
      </h4>

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
        {t("configPageTechicalData")}
      </button>

      {isDropdownActive && (
        <ul className="engine-configurator__info-list">
          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">
              {t("configPageFuelType")}
            </p>

            <p className="engine-configurator__info-list-info">
              {engine.fuelType}
            </p>
          </li>

          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">
              {t("configPageEnginePower")}
            </p>
            <p className="engine-configurator__info-list-info">
              {`${engine.horsePowers} (h.p.)`}
            </p>
          </li>

          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">
              {t("configPageFuelConsumption")}
            </p>
            <p className="engine-configurator__info-list-info">
              {`${transmission.fuelConsumption}l/ 100km`}
            </p>
          </li>

          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">
              {t("configPageTransmission")}
            </p>

            <p className="engine-configurator__info-list-info">
              {transmission.title}
            </p>
          </li>

          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">Drive unit</p>
            <p className="engine-configurator__info-list-info">
              {t("configPageDriveUnit")}
            </p>
          </li>

          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">
              {t("configPageAcceleration")}
            </p>

            <p className="engine-configurator__info-list-info">
              {`${transmission.acceleration} s`}
            </p>
          </li>

          <li className="engine-configurator__info-list-item">
            <p className="engine-configurator__info-list-caption">
              {t("configPageEmissions")}
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
