import React from "react";
import styled from "styled-components";

const BtnEn = styled.input`
  height: 60px;
  background-color: #4a67ff;
  color: #fff;
  border: 0;
  border-radius: 8px;
  font-family: Helvetica-Neue-Bold, sans-serif;
  font-size: 18px;
`;
const BtnDisabled = styled(BtnEn)`
  background-color: #99a9ff;
`;
type props = {
  disabled: boolean;
};
export const LoginButton: React.FC<props> = ({
  disabled,
}) => {
  return disabled ? (
    <BtnDisabled type="submit" disabled value="Войти" />
  ) : (
    <BtnEn type="submit" value="Войти" />
  );
};
