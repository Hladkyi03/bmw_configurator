import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="container container--desktop-padding-0">
        <div className="nav__wrapper">
          <ul className="nav__list">
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Vehicles
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Electric vehicles
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Configurator
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                Purchase
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                More about BMW
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
