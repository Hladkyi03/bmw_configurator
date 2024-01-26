import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import "./PageNotFound.scss";

export const PageNotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="page-not-found">
      <div className="container">
        <p className="page-not-found__title">{t("pageNotFoundTitle")}</p>

        <Button
          color="white"
          text={t("pageNotFoundButtonTitle")}
          url="home"
          modificators={"button--margin-top-32"}
        />
      </div>
    </div>
  );
};
