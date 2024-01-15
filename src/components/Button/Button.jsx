import React from 'react'
import { Link } from 'react-router-dom';
import cn from 'classnames';
import "./Button.scss";

export const Button = ({ color, text, url }) => {
  return (
    <button className={cn("button", {
      "button--white": color === "white",
      "button--black": color === "black",
    })}>
      <Link className="button__link" to={`/${url}`}>
        {text}
      </Link>
    </button>
  );
};
