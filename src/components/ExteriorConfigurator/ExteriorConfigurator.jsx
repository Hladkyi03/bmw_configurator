import React from "react";
import { useContext } from "react";
import { StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import "./ExteriorConfigurator.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import { getSearchWith } from "../../utils/getSearchWith";
import { getFormatedNumber } from "../../utils/getFormatedNumber";

export const ExteriorConfigurator = ({ availableColors }) => {
  const [searchParams] = useSearchParams();

  const carConfig = useContext(StateContext);

  const { t } = useTranslation();

  const handleBtnClick = (value) => {
    return getSearchWith(searchParams, "color", value.toString()).toString();
  };

  const checkColorInList = (colorId, allColors) => {
    return allColors.some((color) => color.id === colorId);
  };

  return (
    <div className="exterior-configurator">
      <h2 className="exterior-configurator__title">
        {t("configPageExterior")}
      </h2>

      <h3 className="exterior-configurator__subtitle">
        {t("configPageCarBodyColor")}
      </h3>

      <div className="exterior-configurator__wrapper">
        {availableColors.map((color) => (
          <div className="exterior-configurator__category" key={color.category}>
            <p className="exterior-configurator__caterogy-title">
              {color.category}
            </p>

            <ul className="exterior-configurator__colors-list">
              {color.colors.map((carColor) => (
                <li
                  className="exterior-configurator__list-item"
                  key={carColor.id}
                >
                  <button
                    className={cn("exterior-configurator__list-button", {
                      "exterior-configurator__list-button--active":
                        carColor.id === carConfig.color.id,
                    })}
                  >
                    <Link to={{ search: handleBtnClick(carColor.id) }}>
                      <img
                        src={carColor.imageSrc}
                        alt="color"
                        className={cn("exterior-configurator__color-image", {
                          "exterior-configurator__color-image--active":
                            carColor.id === carConfig.color.id,
                        })}
                      />
                    </Link>
                  </button>
                </li>
              ))}
            </ul>

            {checkColorInList(carConfig.color.id, color.colors) && (
              <div className="exterior-configurator__selected-info">
                <p className="exterior-configurator__color-title">
                  {carConfig.color.title}
                </p>

                <p className="exterior-configurator__color-price">
                  {`${getFormatedNumber(carConfig.color.price)} ${t("configPageCurrency")}`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
