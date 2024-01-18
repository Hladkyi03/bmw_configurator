import React from "react";
import { Button } from "../Button/Button";
import "./HotOffers.scss";
import winterBmws from "../../media/img/winter-bmw.jpeg";
import whiteBmws from "../../media/img/white-bmws.jpeg";

export const HotOffers = () => (
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
              UP TO -20% DISCOUNT ON AUTOMOBILE PRODUCTS.
            </h4>

            <p className="hot-offers__offer-subtitle">
              Catch the winter vibes with BMW.
            </p>

            <p className="hot-offers__offer-info">
              Special offer valid when purchasing from the official online store
              and at BMW dealerships.*
            </p>

            <Button
              color="black"
              text="Online store"
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
            <h4 className="hot-offers__offer-title">TRADE-IN</h4>

            <p className="hot-offers__offer-subtitle">
              Online vehicle appraisal and buyback.
            </p>

            <p className="hot-offers__offer-info">
              In just a few clicks, you can directly find out the residual value
              of your car.
            </p>

            <Button
              color="black"
              text="Calculate the cost."
              url="/home"
              modificators={"button--margin-top-24 button--tablet-medium"}
            />
          </div>
        </div>

        <p className="hot-offers__addictional-info">
          * The offer allows for a discount of up to -20% on specific items
          (product categories) when purchased on the online store shop.bmw.ua
          and/or at the accessory sales departments of official BMW dealerships
          in Ukraine. The offer is valid within the official BMW dealership
          network in Ukraine from 05.01.2024 to 31.01.2024 inclusive. The list
          of items eligible for discounts, as well as the discount rates and
          terms, can be obtained from the official BMW dealership network in
          Ukraine. The images are for illustration purposes and may differ from
          the products available in the BMW dealership network. Discounts
          offered under the terms of the offer cannot be combined with discounts
          from other promotions, vouchers, or cards. LLC &quot;AVT Bavaria
          Ukraine&quot;, the official importer of BMW in Ukraine, reserves the
          right to change the terms and duration of the offer at its discretion
          without prior notice. The quantity of goods is limited. The offer is
          valid only if the goods are available or if the goods are ordered
          within the offer period.
        </p>
      </div>
    </div>
  </div>
);
