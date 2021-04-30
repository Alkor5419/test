import React from "react";
import styled from "styled-components";

const ExitBtn = styled.button`
  background-color: #f5f5f5;
  width: 200px;
  border-radius: 8px;
  padding: 20px 70px;
  border: 0;
  cursor: pointer;
  &:active {
    box-shadow: 2px 2px;
  }
`;
const BtnText = styled.span`
  font-family: "Helvetica-Neue-Bold", sans-serif;
  font-weight: 700;
  font-size: 18px;
`;
type Props = {
  onClick: () => void;
};
export const ExitButton: React.FC<Props> = ({
  onClick,
}) => {
  return (
    <ExitBtn onClick={onClick}>
      <BtnText>Выйти</BtnText>
    </ExitBtn>
  );
};
