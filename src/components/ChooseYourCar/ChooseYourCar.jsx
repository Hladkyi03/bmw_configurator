import React from "react";
import { Link } from "react-router-dom";
import "./ChooseYourCar.scss";
import { useTranslation } from "react-i18next";

export const ChooseYourCar = () => {
  const { t } = useTranslation();

  return (
    <div className="choose-your-car">
      <div className="container">
        <div className="choose-your-car__wrapper">
          <h3 className="choose-your-car__title">{t("chooseYourCarTitle")}</h3>

          <Link className="choose-your-car__link" to="/home">
            {t("chooseYourCarLink")}
          </Link>
        </div>
      </div>
    </div>
  )
};
