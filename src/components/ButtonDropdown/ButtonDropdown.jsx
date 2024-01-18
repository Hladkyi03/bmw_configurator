import React, { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./ButtonDropdown.scss";

export const ButtonDropdown = ({ title, listItems }) => {
  const [isListOpen, setIsListOpened] = useState(false);

  const handleOnClick = () => {
    setIsListOpened((prev) => !prev);
  };

  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <div className="footer__button-wrapper">
      <button
      className="footer__button"
      onClick={handleOnClick}
      disabled={isLarge}
      >
        {title}
        <img
          src="https://cdn-icons-png.flaticon.com/512/54/54785.png"
          alt="footer__button-image"
          className="footer__button-icon"
        />
      </button>

      {isLarge ? (
        <ul className="footer__dropdown-list">
          {listItems.map((item) => (
            <li className="footer__dropdown-item" key={item.url}>
              <Link to={item.url} className="footer__dropdown-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (isListOpen && (
        <ul className="footer__dropdown-list">
          {listItems.map((item) => (
            <li className="footer__dropdown-item" key={item.url}>
              <Link to={item.url} className="footer__dropdown-link">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
