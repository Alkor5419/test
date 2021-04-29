import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { MainTemplate } from "./shared/templates/main-template";
import { GlobalStyles } from "./shared/ui-settings/global-styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainTemplate>
      <Routes />
    </MainTemplate>
  </React.StrictMode>,
  document.getElementById("root")
);
