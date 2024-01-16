import React from "react";
import { Link } from "react-router-dom";
import "./ChooseYourCar.scss";

export const ChooseYourCar = () => (
  <div className="choose-your-car">
    <div className="container">
      <h3 className="choose-your-car__title">Choose your BMW</h3>

      <Link className="choose-your-car__link" to="/home">
        Vehicles
      </Link>
    </div>
  </div>
);
