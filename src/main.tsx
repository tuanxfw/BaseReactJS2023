import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";
import GlobalStyle from "@style/GlobalStyle";
import AntdStyle from "@style/vendors/AntdStyle";
import store from "@redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "@locales/i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <AntdStyle />
        <Route>
          <App />
        </Route>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
