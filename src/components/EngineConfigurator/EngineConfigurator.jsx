import React, { useContext } from "react";
import "./EngineConfigurator.scss";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../utils/getSearchWith";
import { useState } from "react";
import cn from "classnames";
import {
  StateContext,
} from "../CarConfiguratorContext/CarConfigurationContext";
import { useTranslation } from "react-i18next";
import { getFormatedNumber } from "../../utils/getFormatedNumber";

export const EngineConfigurator = ({ setIsOverlayOpen }) => {
  const [searchParams] = useSearchParams();

  const { t } = useTranslation();

  const carConfig = useContext(StateContext);
  // const dispatch = useContext(DispatchContext);

  const { engine, transmission } = carConfig;

  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const handleBtnClick = (value) => {
    return getSearchWith(
      searchParams,
      "transmission",
      value.toString()
    ).toString();
  };

  const handleOpenBtnClick = () => {
    document.body.style.overflow = "hidden";
    setIsOverlayOpen(true);
  };

  const handleDropdownBtnClick = () => {
    setIsDropdownActive((prev) => !prev);
  };

  // const handleRadioBtnClick = (currentTransmission) => {
  //   const action = {
  //     type: "addCarTransmission",
  //     payload: { transmission: currentTransmission },
  //   };

  //   dispatch(action);
  // };

  return (
    <div className="engine-configurator">
      <h2 className="engine-configurator__title">{t("configPageEngine")}</h2>

      <div className="engine-configurator__wrapper">
        <h3 className="engine-configurator__model-name">{engine.title}</h3>

        <p className="engine-configurator__fuel-type">{engine.fuelType}</p>

        <p className="engine-configurator__start-price">
          {`${t("configPageFrom")} ${getFormatedNumber(engine.price + transmission.price)} ${t(
            "configPageCurrency"
          )}`}
        </p>

        <h4 className="engine-configurator__transmission-title">
          {t("configPageTransmission")}
        </h4>

        <p className="engine-configurator__transmission-type">
          {transmission.title}
        </p>

        <div className="engine-configurator__buttons-wrapper">
          {engine.transmission.map((carTransmission) => (
            <button
              type="radio"
              name="car-transmission"
              className="engine-configurator__radio-button"
              key={carTransmission.title}
            >
              <Link
                className={cn("engine-configurator__button-link", {
                  "engine-configurator__button-link--active":
                    transmission.title === carTransmission.title,
                })}
                to={{ search: handleBtnClick(carTransmission.title) }}>
                {carTransmission.title}
              </Link>
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
              <p className="engine-configurator__info-list-caption">
                {t("configPageDriveUnit")}
              </p>
              <p className="engine-configurator__info-list-info">
                {engine.driveUnit}
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

      <button
        className="engine-configurator__overlay-button"
        onClick={handleOpenBtnClick}
      >
        {t("configPageEnginesBtn")}
      </button>
    </div>
  );
};
