import React from "react";
import styled from "styled-components";
const CheckboxWrap = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CheckboxTrue = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 2px;
  background-color: #4a67ff;
`;
const CheckboxText = styled.span`
  margin-left: 14px;
`;
const CheckboxRowContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  max-width: 200px;
  cursor: pointer;
`;
type Props = {
  onClick: () => void;
  toggleCheckbox: boolean;
};
export const CheckboxRow: React.FC<Props> = ({
  onClick,
  toggleCheckbox,
}) => {
  return (
    <CheckboxRowContainer onClick={onClick}>
      <CheckboxWrap>
        {toggleCheckbox ? <CheckboxTrue /> : null}
      </CheckboxWrap>
      <CheckboxText>Запомнить пароль</CheckboxText>
    </CheckboxRowContainer>
  );
};
