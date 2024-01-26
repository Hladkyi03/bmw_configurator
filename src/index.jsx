import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { GlobalStateProvider } from
  "./components/CarConfiguratorContext/CarConfigurationContext";
import i18n from './translations/i18n';
import { I18nextProvider } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStateProvider>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </GlobalStateProvider>
    </HashRouter>
  </React.StrictMode>
);
