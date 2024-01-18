import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";
import cn from "classnames";

export const Nav = ({ setIsOpen }) => {
  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  const handleOnClick = () => {
    if (setIsOpen) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div className="nav">
      <div className="container container--desktop-padding-0">
        <div className="nav__wrapper">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/catalog"
                onClick={handleOnClick}
              >
                Vehicles
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                Electric vehicles
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                Configurator
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                Purchase
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                More about BMW
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
