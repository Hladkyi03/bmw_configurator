import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";
import cn from "classnames";
import { useTranslation } from "react-i18next";

export const Nav = ({ setIsOpen }) => {
  const location = useLocation();

  const { t } = useTranslation();

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
                {t("navLinkFirst")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                {t("navLinkSecond")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                {t("navLinkThird")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                {t("navLinkFourth")}
              </Link>
            </li>
            <li className="nav__item">
              <Link
                className={cn("nav__link", {
                  "nav__link--black": !isHomePage,
                })}
                to="/"
              >
                {t("navLinkFiveth")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
