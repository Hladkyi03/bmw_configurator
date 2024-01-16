import React from "react";
import { Button } from "../Button/Button";
import "./News.scss";

export const News = () => (
  <div className="news">
    <div className="news__block">
      <div
        className="news__block-background
          news__block-background--charity-bg"
      ></div>

      <div className="news__block-bottom-wrapper">
        <h1 className="news__block-title">
          Charitable efforts by BMW during the war.
        </h1>

        <p
          className="news__block-subtitle
            news__block-subtitle--text-transform-none"
        >
          The amount of 120,893,800 UAH has been listed.
        </p>

        <Button
          color="white"
          text="Learn more"
          url="/home"
          modificators={"button--margin-top-28"}
        />
      </div>
    </div>

    <div className="news__block">
      <div
        className="news__block-background
          news__block-background--new-car-bg"
      ></div>

      <div className="news__block-bottom-wrapper">
        <h1
          className="news__block-title
            news__block-title--text-transform-none"
        >
          NEW BMW Vision Neue Klasse
        </h1>

        <p className="news__block-subtitle">New era of mobility.</p>

        <Button
          color="white"
          text="Learn more"
          url="/home"
          modificators={"button--margin-top-28"}
        />
      </div>
    </div>
  </div>
);
