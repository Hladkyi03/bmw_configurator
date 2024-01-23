import React from "react";
import { useContext } from "react";
import { StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import { Button } from "../Button/Button";
import './TotalPrice.scss';

export const TotalPrice = () => {
  const carConfig = useContext(StateContext);

  const { engine, transmission, color, wheels } = carConfig;

  const countTotalSum = () => {
    return engine.price + transmission.price + color.price + wheels.price;
  }

  return (
    <div className="total-price">
      <h3 className="total-price__model-name">
        {engine.title}
      </h3>

      <div className="total-price__right-wrapper">
        <div className="total-price__wrapper">
          <p className="total-price__total-price-label">
            Total sum
          </p>

          <p className="total-price__total-price">
            {`${countTotalSum()} uah`}
          </p>
        </div>

        <div className="total-price__wrapper">
          <Button
            color="blue"
            text="Go to payment"
            url={`home`}
            modificators={"button--border-radius-0"}
          />
        </div>
      </div>
    </div>
  )
}
