import React from "react";
import styled from "styled-components";
import { Header } from "../molecules/header";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const MainTemplate: React.FC = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
    </Main>
  );
};
