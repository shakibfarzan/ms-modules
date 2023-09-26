import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

Providers.globalProvider = new Msal2Provider({
  clientId: process.env.REACT_APP_MS_CLIENT_ID ?? '',
  scopes: ['calendars.read', 'user.read', 'openid', 'profile', 'people.read', 'Chat.Create', 'Chat.Read', 'Mail.Read', 'Calendars.ReadWrite']
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);