import React from "react";
import "./PurchasePrograms.scss";
import { Button } from "../Button/Button";
import creationCarsImage from "../../media/img/creation.png";
import usedCarsImage from "../../media/img/used-cars.png";
import newCarsImage from "../../media/img/new-cars.png";

export const PurchasePrograms = () => (
  <div className="purchase-programs">
    <div className="container container--padding-inline-0">
      <h3 className="purchase-programs__title">Purchase Programs</h3>

      <p className="purchase-programs__subtitle">Choose your BMW.</p>

      <div className="purchase-programs__programs">
        <div className="purchase-programs__program">
          <img
            src={newCarsImage}
            alt="car-icon"
            className="purchase-programs__program-image"
          />

          <p className="purchase-programs__program-title">New vehicles</p>

          <Button
            color="black"
            text="Find"
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

            <p className="purchase-programs__program-title">Used vehicles</p>

            <Button
              color="black"
              text="Find"
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

            <p className="purchase-programs__program-title">Create your BMW</p>

            <Button
              color="black"
              text="Configurator"
              url="/home"
              modificators={"button--margin-top-32 button--tablet-small"}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
