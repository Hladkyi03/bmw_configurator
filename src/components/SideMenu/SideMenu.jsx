import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.scss";
import cn from "classnames";
import logo from "../../media/icons/logo-white.svg";
import cross from "../../media/icons/cross.svg";
import { Nav } from "../Nav/Nav";

export const SideMenu = ({ isOpen, setIsOpen }) => {
  const handleOnClick = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  return (
    <div
      className={cn("sidemenu", {
        "sidemenu--active": isOpen,
      })}
    >
      <div className="sidemenu__topbar">
        <div className="container">
          <div className="sidemenu__topbar-wrapper">
            <Link className="sidemenu__topbar-link" to="/">
              <img src={logo} alt="logo" className="sidemenu__logo" />
            </Link>

            <div className="sidemenu__topbar-right-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                fill="#666"
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

              <button className="sidemenu__close-btn" onClick={handleOnClick}>
                <img src={cross} alt="cross" className="sidemenu__cross-img" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Nav />
    </div>
  );
};
