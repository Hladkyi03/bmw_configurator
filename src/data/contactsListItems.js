import i18next from "i18next";
import i18n from "../translations/i18n";

/* eslint-disable max-len */
export const contactsListItems = [
  {
    title: i18n.t("footerContactListFirstItem"),
    url: "https://www.bmw.ua/uk/topics/fascination-bmw/bmw-dealers-service.html",
  },

  {
    title: i18n.t("footerContactListSecondItem"),
    url: "https://www.bmw.ua/uk/ssl/contact-request.html",
  },

  {
    title: i18n.t("footerContactListThirdItem"),
    url: "https://www.bmw.ua/uk/topics/offers-and-services/bmw-service-partnership.html",
  },
];

i18next.on('languageChanged', function() {
  contactsListItems[0].title = i18n.t('footerContactListFirstItem');
  contactsListItems[1].title = i18n.t('footerContactListSecondItem');
  contactsListItems[2].title = i18n.t('footerContactListThirdItem');
});
