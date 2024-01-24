import React from "react";
import { Button } from "../Button/Button";
import "./HotOffers.scss";
import winterBmws from "../../media/img/winter-bmw.jpeg";
import whiteBmws from "../../media/img/white-bmws.jpeg";
import { useTranslation } from "react-i18next";

export const HotOffers = () => {
  const { t } = useTranslation();

  return (
    <div className="hot-offers">
      <div className="container">
        <div className="hot-offers__wrapper">
          <div className="hot-offers__offer">
            <img
              src={winterBmws}
              alt="winter-cars"
              className="hot-offers__offer-image"
            />

            <div className="hot-offers__bottom-wrapper">
              <h4 className="hot-offers__offer-title">
                {t("hotOffersTitleFirst")}
              </h4>

              <p className="hot-offers__offer-subtitle">
                {t("hotOffersSubtitleFirst")}
              </p>

              <p className="hot-offers__offer-info">
                {t("hotOffersInfoFirst")}
              </p>

              <Button
                color="black"
                text={t("hotOffersButtonFirst")}
                url="/home"
                modificators={"button--margin-top-24 button--tablet-medium"}
              />
            </div>
          </div>

          <div className="hot-offers__offer">
            <img
              src={whiteBmws}
              alt="winter-cars"
              className="hot-offers__offer-image"
            />
            <div className="hot-offers__bottom-wrapper">
              <h4 className="hot-offers__offer-title">
                {t("hotOffersTitleSecond")}
              </h4>

              <p className="hot-offers__offer-subtitle">
                {t("hotOffersSubtitleSecond")}
              </p>

              <p className="hot-offers__offer-info">
                {t("hotOffersInfoSecond")}
              </p>

              <Button
                color="black"
                text={t("hotOffersButtonSecond")}
                url="/home"
                modificators={"button--margin-top-24 button--tablet-medium"}
              />
            </div>
          </div>

          <p className="hot-offers__addictional-info">
            {t("hotOffersAddictionalInfo")}
          </p>
        </div>
      </div>
    </div>
  )
};
