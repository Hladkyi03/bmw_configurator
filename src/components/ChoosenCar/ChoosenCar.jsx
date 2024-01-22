import React from "react";
import { Button } from "../Button/Button";
import "./ChoosenCar.scss";
import carIcon from "../../media/icons/car-icon.png";
import crossIcon from "../../media/icons/cross.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

export const ChoosenCar = ({ model, setChoosenModel }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleOnClick = () => {
    if (isMobile) {
      document.body.style.overflow = "auto";
    }
    setChoosenModel(null);
  };

  const isSmall = useMediaQuery("(max-width: 1023px)");

  return (
    <div className="choosen-car">
      <button className="choosen-car__close-btn" onClick={handleOnClick}>
        <img
          src={crossIcon}
          alt="cross"
          className="choosen-car__close-btn-image"
        />
      </button>

      <img src={model.imageBig} alt="car" className="choosen-car__image" />

      <div className="choosen-car__wrapper">
        <div className="choosen-car__block choosen-car__block--first">
          {model.isMPower && (
            <img
              // eslint-disable-next-line max-len
              src="https://www.bmw.ua/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
              alt="m-power"
              className="choosen-car__mpower-icon"
            />
          )}

          <p className="choosen-car__title">{model.name}</p>

          <ul className="choosen-car__list">
            {model.engineTypes.map((type) => (
              <li className="choosen-car__list-item" key={type}>
                {type}
              </li>
            ))}
          </ul>

          {!isSmall && (
            <Button
              color="black"
              text="Learn More"
              url="home"
              modificators={"button--margin-top-auto button--border-radius-0"}
            />
          )}
        </div>

        <div className="choosen-car__block choosen-car__block--second">
          <img
            src={carIcon}
            alt="car-icon"
            className="choosen-car__block-image"
          />

          <Button
            color={`${isSmall ? "black" : "blue"}`}
            text={`${isSmall ? "Learn more" : "Configurate"}`}
            url={`${isSmall ? "home" : `configurator/${model.id}`}`}
            modificators={"button--margin-top-16 button--border-radius-0"}
          />
        </div>

        <div className="choosen-car__block choosen-car__block--third">
          {isSmall && (
            <Button
              color="blue"
              text="Configurate"
              url={`configurator/${model.id}`}
              modificators={"button--margin-top-16 button--border-radius-0"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
