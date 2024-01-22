import React from "react";
import { useState } from "react";
import "./ExteriorConfigurator.scss";

export const ExteriorConfigurator = ({ availableColors }) => {
  const [selectedColor, setSelectedColor] = useState(
    availableColors[0].colors[0]
  );

  const handleBtnClick = (clickedColor) => {
    setSelectedColor(clickedColor);
  };

  const checkColorInList = (colorId, allColors) => {
    return allColors.some((color) => color.id === colorId);
  };

  console.log(selectedColor.title);

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

            {checkColorInList(selectedColor.id, color.colors) && (
              <div className="exterior-configurator__selected-info">
                <p className="exterior-configurator__color-title">
                  {selectedColor.title}
                </p>

                <p className="exterior-configurator__color-price">
                  {`${selectedColor.price} грн`}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
