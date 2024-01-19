import React from "react";
import "./CarCard.scss";
import electricEngineIcon from "../../media/icons/engine-electric.png";
import hybrideEngineIcon from "../../media/icons/engine-hybride.png";

export const CarCard = ({ model, setChoosenModel }) => {
  const handleOnClick = (model) => {
    document.body.style.overflow = "hidden";
    setChoosenModel(model);
  };

  const engineIcon = model.engineTypes.includes("Plug-in Hybride")
    ? hybrideEngineIcon
    : model.engineTypes.includes("Full Electric")
    ? electricEngineIcon
    : null;

  return (
    <div className="car-card">
      <button
        className="car-card__overlay-button"
        onClick={() => handleOnClick(model)}
      ></button>

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

        {engineIcon && (
          <img
            src={engineIcon}
            alt="engine type"
            className="car-card__engine-icon"
          />
        )}
      </div>

      <p className="car-card__title">{model.name}</p>

      <ul className="car-card__list">
        {model.engineTypes.map((type) => (
          <li className="car-card__list-item" key={type}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
};
