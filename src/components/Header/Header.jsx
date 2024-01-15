import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.scss";
import logo from "../../media/icons/bmw-logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__topbar">
          <Link className="header__topbar-link">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>

          <div className="header__burger-menu">

          </div>
        </div>

        <h1 className="header__title">
          BMW X3 та BMW X4 універсальність та стиль.
        </h1>

        <p className="header__subtitle">
          спеціальна пропозиція на автомобілі в наявності.
        </p>

        <Button color="white" text="Дізнатися більше" url="/home" />
      </div>
    </header>
  );
};
