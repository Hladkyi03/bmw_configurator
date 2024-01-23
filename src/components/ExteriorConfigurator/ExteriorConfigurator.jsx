import React from "react";
import { useContext } from "react";
import { DispatchContext, StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import "./ExteriorConfigurator.scss";

export const ExteriorConfigurator = ({ availableColors }) => {
  const carConfig = useContext(StateContext)
  const dispatch = useContext(DispatchContext);

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

  console.log(carConfig.color);

  return (
    <div className="exterior-configurator">
      <h2 className="exterior-configurator__title">Exterior</h2>

      <h3 className="exterior-configurator__subtitle">Car body color</h3>

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
                    className="exterior-configurator__list-button"
                    onClick={() => handleBtnClick(carColor)}
                  >
                    <img
                      src={carColor.imageSrc}
                      alt="color"
                      className="exterior-configurator__color-image"
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
                  {`${carConfig.color.price} грн`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
