import React from "react";
import { Button } from "../Button/Button";
import "./PageNotFound.scss";

export const PageNotFound = () => (
  <div className="page-not-found">
    <div className="container">
      <p className="page-not-found__title">Page not found</p>

      <Button
        color="white"
        text="Back to home page"
        url="home"
        modificators={"button--margin-top-32"}
      />
    </div>
  </div>
)
