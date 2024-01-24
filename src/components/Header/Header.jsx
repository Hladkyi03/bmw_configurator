import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.scss";
import logo from "../../media/icons/bmw-logo.svg";
import logoWhite from "../../media/icons/logo-white.svg";
import { SideMenu } from "../SideMenu/SideMenu";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Nav } from "../Nav/Nav";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import i18n from "../../translations/i18n";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();

  const changeLanguageUK = () => {
    const nextLanguage = i18n.language === "en" ? "uk" : "";
    i18n.changeLanguage(nextLanguage);
  };

  const changeLanguageEN = () => {
    const nextLanguage = i18n.language === "uk" ? "en" : "";
    i18n.changeLanguage(nextLanguage);
  };

  const location = useLocation();

  const isHomePage = location.pathname === "/home";

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const isLarge = useMediaQuery("(min-width: 1024px)");

  return (
    <header
      className={cn("header", {
        "header--small": !isHomePage,
        "header--min-height-100vh": isMenuOpen,
      })}
    >
      {!isLarge && <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}

      {isHomePage && <div className="header__background"></div>}

      <div className="header__wrapper">
        <div className="container">
          <div
            className={cn("header__topbar", {
              "header__topbar--small": !isHomePage,
            })}
          >
            <div className="header__left-wrapper">
              <Link className="header__topbar-link" to="/home">
                <img
                  src={isHomePage ? logo : logoWhite}
                  alt="logo"
                  className="header__logo"
                />
              </Link>

              {isLarge && <Nav />}
            </div>

            <div className="header__topbar-right-wrapper">
              <button
                className={cn("header__topbar-button", {
                  "header__topbar-button--active": i18n.language === "en",
                }
                )}
                onClick={changeLanguageEN}
              >
                EN
              </button>
              <button
                className={cn("header__topbar-button", {
                  "header__topbar-button--active": i18n.language === "uk",
                }
                )}
                onClick={changeLanguageUK}
              >
                UA
              </button>

              {!isLarge && (
                <button className="header__burger-btn" onClick={handleMenuOpen}>
                  <div className="header__burger-menu">
                    <span
                      className={cn("header__burger-line", {
                        "header__burger-line--black": !isHomePage,
                      })}
                    ></span>
                    <span
                      className={cn("header__burger-line", {
                        "header__burger-line--black": !isHomePage,
                      })}
                    ></span>
                    <span
                      className={cn("header__burger-line", {
                        "header__burger-line--black": !isHomePage,
                      })}
                    ></span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {isHomePage && (
          <div className="header__bottom-wrapper">
            <h1 className="header__title">
              {t("headerTitle")}
            </h1>

            <p className="header__subtitle">
              {t("headerSubtitle")}
            </p>

            <Button
              color="white"
              text={t("headerButton")}
              url="/home"
              modificators={"button--margin-top-16 button--tablet-medium-sized"}
            />
          </div>
        )}
      </div>
    </header>
  );
};
