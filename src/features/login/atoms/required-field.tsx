import React from "react";
import styled from "styled-components";
const ErrorText = styled.p`
  color: #e26f6f;
  font-size: 14px;
  margin: 0;
`;

export const RequiredField = () => {
  return <ErrorText>Обязательное поле</ErrorText>;
};
