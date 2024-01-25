/* eslint-disable max-len */
import i18next from "i18next";
import i18n from "../translations/i18n";

export const bmwWorldListItems = [
  {
    title: i18n.t("footerBmwWorldFirstItem"),
    url: "https://www.bmw.ua/uk/topics/fascination-bmw/AWT_charity_programs.html",
  },

  {
    title: i18n.t("footerBmwWorldSecondItem"),
    url: "https://www.bmw.ua/uk/topics/fascination-bmw/news.html",
  },
];

i18next.on('languageChanged', function() {
  bmwWorldListItems[0].title = i18n.t('footerBmwWorldFirstItem');
  bmwWorldListItems[1].title = i18n.t('footerBmwWorldSecondItem');
});


