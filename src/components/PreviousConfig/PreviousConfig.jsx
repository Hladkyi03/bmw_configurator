import React from "react";
import './PreviousConfig.scss';

import cross from "../../media/icons/cross.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const PreviousConfig = ({ url, setPreviousSessionConfig }) => {
  const { t } = useTranslation();

  const handleOnClick = () => {
    localStorage.setItem("previousConfigUrl", "");
    setPreviousSessionConfig("");
  }

  return (
    <div className="previous-config">
      <button className="previous-config__close-btn" onClick={handleOnClick}>
        <img src={cross} alt="close" className="previous-config__cross-img" />
      </button>

      <p className="previous-config__title">
        {t("previousConfigTitle")}
      </p>

      <button className="previous-config__button">
        <Link to={url} className="previous-config__button-link">
          {t("previousConfigButton")}
        </Link>
      </button>

    </div>
  )
}
