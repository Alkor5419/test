import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { ExitButton } from "../atoms/exit-button";

const Text = styled.h2`
  margin: 0 0 50px;
  font-size: 40px;
  font-weight: 400;
  font-family: "Helvetica-Neue-Regular", sans-serif;
  width: 100%;
`;
const LoginText = styled.span`
  font-family: "Helvetica-Neue-Bold", sans-serif;
  font-weight: 700;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type Props = {
  login: null | string;
};
export const ProfilePage: React.FC<Props> = ({ login }) => {
  const [loginLS, setLoginLS] = useState<null | string>(
    null
  );
  const [redirect, setRedirect] = useState<boolean>(false);
  useEffect(() => {
    const loginValue = window.localStorage.getItem("login");
    setLoginLS(loginValue);
  }, []);
  const handleClick = () => {
    window.localStorage.removeItem("login");
    setRedirect(true);
  };
  return redirect ? (
    <Redirect to="/login" />
  ) : (
    <Wrap>
      <Text>
        Здравствуйте,{" "}
        <LoginText>{loginLS ? loginLS : login}</LoginText>
      </Text>
      <ExitButton onClick={handleClick} />
    </Wrap>
  );
};
