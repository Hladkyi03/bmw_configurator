import React from "react";
import { Button } from "../Button/Button";
import "./CarNotFound.scss";

export const CarNotFound = () => (
  <div className="car-not-found">
    <div className="container">
      <p className="car-not-found__title">Car not found</p>

      <Button
        color="white"
        text="Back to catalog"
        url="catalog"
        modificators={"button--margin-top-32"}
      />
    </div>
  </div>
)
