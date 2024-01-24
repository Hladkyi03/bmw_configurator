import React from "react";
import "./PurchasePrograms.scss";
import { Button } from "../Button/Button";
import creationCarsImage from "../../media/img/creation.png";
import usedCarsImage from "../../media/img/used-cars.png";
import newCarsImage from "../../media/img/new-cars.png";
import { useTranslation } from "react-i18next";

export const PurchasePrograms = () => {
  const { t } = useTranslation();

  return (
    <div className="purchase-programs">
      <div className="container container--padding-inline-0">
        <h3 className="purchase-programs__title">
          {t("purchaseProgramsTitle")}
        </h3>

        <p className="purchase-programs__subtitle">
          {t("purchaseProgramsSubtitle")}
        </p>

        <div className="purchase-programs__programs">
          <div className="purchase-programs__program">
            <img
              src={newCarsImage}
              alt="car-icon"
              className="purchase-programs__program-image"
            />

            <p className="purchase-programs__program-title">
              {t("programTitleFirst")}
            </p>

            <Button
              color="black"
              text={t("programButtonFind")}
              url="/home"
              modificators={"button--margin-top-32 button--tablet-small"}
            />
          </div>

          <div className="purchase-programs__programs">
            <div className="purchase-programs__program">
              <img
                src={usedCarsImage}
                alt="car-icon"
                className="purchase-programs__program-image"
              />

              <p className="purchase-programs__program-title">
                {t("programTitleSecond")}
              </p>

              <Button
                color="black"
                text={t("programButtonFind")}
                url="/home"
                modificators={"button--margin-top-32 button--tablet-small"}
              />
            </div>
          </div>

          <div className="purchase-programs__programs">
            <div className="purchase-programs__program">
              <img
                src={creationCarsImage}
                alt="car-icon"
                className="purchase-programs__program-image"
              />

              <p className="purchase-programs__program-title">
                {t("programTitleThird")}
              </p>

              <Button
                color="black"
                text={t("programButtonConfigurate")}
                url="/home"
                modificators={"button--margin-top-32 button--tablet-small"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
