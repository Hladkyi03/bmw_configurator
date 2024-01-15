import React from "react";
import "./PurchasePrograms.scss";
import { Button } from "../Button/Button";
import newCarsImage from "../../media/img/creation.png";

export const PurchasePrograms = () => (
  <div className="purchase-programs">
    <div className="container container--padding-inline-0">
      <h3 className="purchase-programs__title">
        ПРОГРАМИ ПОКУПКИ
      </h3>

      <p className="purchase-programs__subtitle">
        Оберіть ваш BMW.
      </p>

      <div className="purchase-programs__programs">
        <div className="purchase-programs__program">
          <img
            src={newCarsImage}
            alt="car-icon"
            className="purchase-programs__program-image"
          />

          <p className="purchase-programs__program-title">
            Нові автомобілі
          </p>

          <Button color="white" text="Знайти" url="/home" />
        </div>

        <div className="purchase-programs__programs">
          <div className="purchase-programs__program">
            <img
              src={newCarsImage}
              alt="car-icon"
              className="purchase-programs__program-image"
            />

            <p className="purchase-programs__program-title">
              Автомобілі з пробігом
            </p>

            <Button color="white" text="Знайти" url="/home" />
          </div>
        </div>

        <div className="purchase-programs__programs">
          <div className="purchase-programs__program">
            <img
              src={newCarsImage}
              alt="car-icon"
              className="purchase-programs__program-image"
            />

            <p className="purchase-programs__program-title">
              Створіть свій BMW
            </p>

            <Button color="white" text="Знайти" url="/home" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
