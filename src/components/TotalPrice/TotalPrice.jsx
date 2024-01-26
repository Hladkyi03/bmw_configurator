import React from "react";
import { useContext } from "react";
import { StateContext } from
  "../CarConfiguratorContext/CarConfigurationContext";
import { Button } from "../Button/Button";
import './TotalPrice.scss';
import { useTranslation } from "react-i18next";
import { getFormatedNumber } from "../../utils/getFormatedNumber";

export const TotalPrice = () => {
  const carConfig = useContext(StateContext);

  const { t } = useTranslation();

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
            {t("configPageTotalPrice")}
          </p>

          <p className="total-price__total-price">
            {`${getFormatedNumber(countTotalSum())} ${t("configPageCurrency")}`}
          </p>
        </div>

        <div className="total-price__wrapper">
          <Button
            color="blue"
            text={t("configPageTotalPriceBtn")}
            url={`home`}
            modificators={"button--border-radius-0"}
          />
        </div>
      </div>
    </div>
  )
}
