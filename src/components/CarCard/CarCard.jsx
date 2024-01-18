import React from "react";
import "./CarCard.scss";

export const CarCard = ({ model }) => {
  return (
    <div className="car-card">
      <div className="car-card__image-wrapper">
        <img src={model.image} alt="car" className="car-card__image" />

        {model.isMPower && (
          <img
            // eslint-disable-next-line max-len
            src="https://www.bmw.ua/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
            alt="m-power"
            className="car-card__mpower-icon"
          />
        )}

        {/* <img src="" alt="" className="car-card__hybrid-icon" /> */}
      </div>

      <p className="car-card__title">{model.name}</p>

      <ul className="car-card__list">
        {model.engineTypes.map(type => (
          <li className="car-card__list-item" key={type}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};
