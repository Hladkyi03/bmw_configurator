import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Header.scss";
import logo from "../../media/icons/bmw-logo.svg";
import { SideMenu } from "../SideMenu/SideMenu";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const isLarge = useMediaQuery("(min-width: 1024px)");

  return (
    <header className="header">
      {!isLarge && <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}

      <div className="header__background"></div>

      <div className="header__wrapper">
        <div className="container">
          <div className="header__topbar">
            <div className="header__left-wrapper">
              <Link className="header__topbar-link" to="/home">
                <img src={logo} alt="logo" className="header__logo" />
              </Link>

              {isLarge && <Nav />}
            </div>

            <div className="header__topbar-right-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="#FFFFFF"
              >
                <path
                  d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438
                      11.601563 37 21 37 C 24.355469 37 27.460938 36.015625
                      30.09375 34.34375 L 42.375 46.625 L 46.625 42.375
                      L 34.5 30.28125 C 36.679688 27.421875 38 23.878906
                      38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219
                      7 34 12.800781 34 20 C 34 27.199219 28.199219
                      33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781
                     13.800781 7 21 7 Z"
                ></path>
              </svg>

              {!isLarge && (
                <button className="header__burger-btn" onClick={handleMenuOpen}>
                  <div className="header__burger-menu">
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="header__bottom-wrapper">
          <h1 className="header__title">
            BMW X3 and BMW X4: Versatility and Style.
          </h1>

          <p className="header__subtitle">
            Special Offer on In-Stock Vehicles.
          </p>

          <Button
            color="white"
            text="Learn more"
            url="/home"
            modificators={"button--margin-top-16 button--tablet-medium-sized"}
          />
        </div>
      </div>
    </header>
  );
};
