import React, { useContext } from "react";
import './WheelsConfigurator.scss';
import { DispatchContext, StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export const WheelsConfigurator = ({ wheels }) => {
  const carConfig = useContext(StateContext)
  const dispatch = useContext(DispatchContext);

  const { t } = useTranslation();

  const handleBtnClick = (clickedWheels) => {
    const action = {
      type: "addCarWheels",
      payload: {
        wheels: clickedWheels,
      }
    }

    dispatch(action);
  };

  return (
    <div className="wheels-configurator">
      <h3 className="wheels-configurator__title">
        {t("configPageWheels")}
      </h3>

      <div className="wheels-configurator__wrapper">
        <ul className="wheels-configurator__wheels-list">
          {wheels.map((wheel) => (
            <li
              className="wheels-configurator__list-item"
              key={wheel.id}
            >
              <button
                className={cn("wheels-configurator__list-button", {
                  "wheels-configurator__list-button--active":
                    wheel.id === carConfig.wheels.id,
                })}
                onClick={() => handleBtnClick(wheel)}
              >
                <img
                  src={wheel.imageSrc}
                  alt="color"
                  className={cn("wheels-configurator__wheel-image", {
                    "wheels-configurator__wheel-image--active":
                      wheel.id === carConfig.wheels.id,
                  })}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="wheels-configurator__selected-info">
          <p className="wheels-configurator__wheel-title">
            {`${carConfig.wheels.diameter}" ${carConfig.wheels.title}`}
          </p>

          <p className="wheels-configurator__wheel-price">
            {`${carConfig.wheels.price} ${t("configPageCurrency")}`}
          </p>
        </div>

      </div>
    </div>
  )
}
