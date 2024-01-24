import React from "react";
import { ChooseYourCar } from "../ChooseYourCar/ChooseYourCar";
import "./Footer.scss";
import facebookIcon from "../../media/icons/facebook.png";
import instagramIcon from "../../media/icons/instagram.png";
import { ButtonDropdown } from "../ButtonDropdown/ButtonDropdown";
import { Link } from "react-router-dom";
import { contactsListItems } from "../../data/contactsListItems";
import { quickLinksListItems } from "../../data/quickLinksListItems";
import { bmwWorldListItems } from "../../data/bmwWorldListItems";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <ChooseYourCar />

      <div className="footer__content-wrapper">
        <div className="container">
          <div className="footer__buttons-container">
            <ButtonDropdown
              title={t("footerContactsTitle")}
              listItems={contactsListItems}
            />

            <ButtonDropdown
              title={t("footerQuickLinksTitle")}
              listItems={quickLinksListItems}
            />

            <ButtonDropdown
              title={t("footerBmwWorldTitle")}
              listItems={bmwWorldListItems}
            />
          </div>
        </div>

        <div className="container">
          <div className="footer__socials-wrapper">
            <Link
              to="https://www.facebook.com/BMW.Ukraine"
              className="footer__social-link"
            >
              <img
                src={facebookIcon}
                alt="facebook"
                className="footer__social-icon"
              />
            </Link>

            <Link
              to="https://www.instagram.com/bmwua/"
              className="footer__social-link"
            >
              <img
                src={instagramIcon}
                alt="instagram"
                className="footer__social-icon"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="container container--on-tablet-padding-inline-36">
        <div className="footer__rights">
          <p className="footer__copyright">© BMW AG 2023</p>

          <ul className="footer__bottom-list">
            <li className="footer__bottom-list-item">
              <Link
                // eslint-disable-next-line max-len
                to="https://www.bmw.ua/uk/footer/metanavigation/legal-disclaimer-pool/legal-disclaimer.html"
                className="footer__bottom-list-link"
              >
                {t("footerLegalDisclaimer")}
              </Link>
            </li>

            <li className="footer__bottom-list-item">
              <Link
                // eslint-disable-next-line max-len
                to="https://www.bmw.ua/uk/footer/metanavigation/legal-notice-pool/imprint.html"
                className="footer__bottom-list-link"
              >
                {t("footerSourceData")}
              </Link>
            </li>

            <li className="footer__bottom-list-item">
              <Link
                // eslint-disable-next-line max-len
                to="https://www.bmw.ua/uk/footer/footer-section/cookie-policy.html"
                className="footer__bottom-list-link"
              >
                {t("footerCookieFiles")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
