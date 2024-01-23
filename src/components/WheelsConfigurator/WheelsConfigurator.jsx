import React, { useContext } from "react";
import './WheelsConfigurator.scss';
import { DispatchContext, StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";

export const WheelsConfigurator = ({ wheels }) => {
  const carConfig = useContext(StateContext)
  const dispatch = useContext(DispatchContext);

  const handleBtnClick = (clickedWheels) => {
    const action = {
      type: "addCarWheels",
      payload: {
        wheels: clickedWheels,
      }
    }

    dispatch(action);
  };

  console.log(carConfig);

  return (
    <div className="wheels-configurator">
      <h3 className="wheels-configurator__title">Wheels</h3>

      <div className="wheels-configurator__wrapper">
        <ul className="wheels-configurator__wheels-list">
          {wheels.map((wheel) => (
            <li
              className="wheels-configurator__list-item"
              key={wheel.id}
            >
              <button
                className="wheels-configurator__list-button"
                onClick={() => handleBtnClick(wheel)}
              >
                <img
                  src={wheel.imageSrc}
                  alt="color"
                  className="wheels-configurator__wheel-image"
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
            {`${carConfig.wheels.price} грн`}
          </p>
        </div>

      </div>
    </div>
  )
}
