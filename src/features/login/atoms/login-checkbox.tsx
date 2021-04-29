import React from "react";
import styled from "styled-components";
const CheckboxWrap = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 4px;
`;
const CheckboxTrue = styled.div`
  background-color: #4a67ff;
`;

export const LoginCheckbox = () => {
  return <input type="checkbox" />;
};
