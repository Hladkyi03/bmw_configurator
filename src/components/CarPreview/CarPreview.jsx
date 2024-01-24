import React from "react";
import "./CarPreview.scss";

export const CarPreview = ({ imageSrc }) => {
  return (
    <img src={imageSrc} alt="car-preview" className="car-preview__image"/>
  )
}
