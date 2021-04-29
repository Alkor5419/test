import React from "react";
import styled from "styled-components";
import { HeaderText } from "../atoms/header-text";

const HeaderWrap = styled.header`
  width: 100%;
`;
export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderText />
    </HeaderWrap>
  );
};
