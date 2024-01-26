import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./CarNotFound.scss";

export const CarNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="car-not-found">
      <div className="container">
        <p className="car-not-found__title">{t("carNotFoundTitle")}</p>

        <Button
          color="white"
          text={t("carNotFoundButtonTitle")}
          url="catalog"
          modificators={"button--margin-top-32"}
        />
      </div>
    </div>
  );
};
