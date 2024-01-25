import React from "react";
import { useContext } from "react";
import { DispatchContext, StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import "./ExteriorConfigurator.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export const ExteriorConfigurator = ({ availableColors }) => {
  const carConfig = useContext(StateContext)
  const dispatch = useContext(DispatchContext);

  const { t } = useTranslation();

  const handleBtnClick = (clickedColor) => {
    const action = {
      type: "addCarColor",
      payload: {
        color: clickedColor,
      }
    }

    dispatch(action);
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
                    onClick={() => handleBtnClick(carColor)}
                  >
                    <img
                      src={carColor.imageSrc}
                      alt="color"
                      className={cn("exterior-configurator__color-image", {
                        "exterior-configurator__color-image--active":
                          carColor.id === carConfig.color.id,
                      })}
                    />
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
                  {`${carConfig.color.price} ${t("configPageCurrency")}`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
