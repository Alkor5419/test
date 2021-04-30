import React, { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "./features/login/pages/login-page";
import { ProfilePage } from "./features/profile/pages/profile-page";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  justify-content: center;
`;
export const Routes: React.FC = () => {
  const [login, setLogin] = useState<null | string>(null);

  return (
    <BrowserRouter>
      <Switch>
        <Wrap>
          <Route path="/login">
            <LoginPage setLogin={setLogin} />
          </Route>
          <Route path="/profile">
            <ProfilePage login={login} />
          </Route>
          <Redirect to="/login" />
        </Wrap>
      </Switch>
    </BrowserRouter>
  );
};
