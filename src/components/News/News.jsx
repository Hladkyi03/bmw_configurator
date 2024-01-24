import React from "react";
import { Button } from "../Button/Button";
import "./News.scss";
import { useTranslation } from "react-i18next";

export const News = () => {
  const { t } = useTranslation();

  return (
    <div className="news">
      <div className="news__block">
        <div
          className="news__block-background
          news__block-background--charity-bg"
        ></div>

        <div className="news__block-bottom-wrapper">
          <h2 className="news__block-title">
            {t("newsBlockTitleFirst")}
          </h2>

          <p
            className="news__block-subtitle
            news__block-subtitle--text-transform-none"
          >
            {t("newsBlockSubtitleFirst")}
          </p>

          <Button
            color="white"
            text={t("newsBlockButtonLearnMore")}
            url="/home"
            modificators={"button--margin-top-28 button--tablet-large"}
          />
        </div>
      </div>

      <div className="news__block">
        <div
          className="news__block-background
          news__block-background--new-car-bg"
        ></div>

        <div className="news__block-bottom-wrapper">
          <h2
            className="news__block-title
            news__block-title--text-transform-none"
          >
            {t("newsBlockTitleSecond")}
          </h2>

          <p className="news__block-subtitle">{t("newsBlockSubtitleSecond")}</p>

          <Button
            color="white"
            text={t("newsBlockButtonLearnMore")}
            url="/home"
            modificators={"button--margin-top-28 button--tablet-large"}
          />
        </div>
      </div>
    </div>
  )
};
