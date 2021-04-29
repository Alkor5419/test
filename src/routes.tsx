import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./features/login/pages/login-page";

export const Routes = () => {
  const [name, setName] = useState<null | string>(null);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">{/* <Profile  /> */}</Route>
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  );
};
