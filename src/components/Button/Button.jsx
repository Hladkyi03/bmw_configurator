import React from 'react'
import { Link } from 'react-router-dom';
import cn from 'classnames';
import "./Button.scss";

export const Button = ({ color, text, url, modificators }) => {
  return (
    <button className={cn("button", modificators, {
      "button--white": color === "white",
      "button--black": color === "black",
      "button--blue": color === "blue",
    })}>
      <Link className="button__link" to={`/${url}`}>
        {text}
      </Link>
    </button>
  );
};
