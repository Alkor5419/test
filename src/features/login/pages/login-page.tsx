import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { LoginButton } from "../atoms/login-button";
import { RequiredField } from "../atoms/required-field";
import { fetchAuth } from "../../../api/fetch-auth";
import { Redirect } from "react-router";

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 640px;
  min-height: 340px;
`;
const Wrap = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const LoginInputs = styled.input`
  background-color: #f5f5f5;
  border: 0;
  height: 60px;
  padding-left: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const LabelCheckbox = styled.label`
  margin-left: 14px;
`;
const CheckboxText = styled.span`
  margin-left: 14px;
`;
const CheckboxRox = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  max-width: 200px;
  cursor: pointer;
`;
const Labels = styled.label`
  margin-bottom: 10px;
`;
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
const HasntAccMessage = styled.div`
  border: 1px solid #e26f6f;
  height: 60px;
  padding-left: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #f5e9e9;
  display: flex;
  align-items: center;
`;
const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e26f6f;
  font-size: 14px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffc8c8;
  margin-right: 14px;
`;
type FormValues = {
  login: string;
  password: string;
  savePassword: boolean;
};

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [toggleCheckbox, setToggleCheckbox] = useState(
    false
  );
  const [hasAcc, setHasAcc] = useState<boolean | undefined>(
    undefined
  );

  // 1.Сделать проверку с локал сторейджа с редиректом
  // 2.Вынести на 1 уровень вверх
  // 3.Сделать резиновую верстку
  // 4.В нет аккаунта закинуть логин
  // 5.Сделать профайл пейдж

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    if (toggleCheckbox) {
      window.localStorage.setItem("login", data.login);
    }
    try {
      const responseData = await fetchAuth(data);
      setHasAcc(responseData);
    } catch (err) {
      console.log(err);
    }
  });

  const handleToggleCheckbox = () => {
    setToggleCheckbox(!toggleCheckbox);
  };
  return hasAcc ? (
    <Redirect to="/profile" />
  ) : (
    <Wrap>
      {hasAcc === false ? (
        <HasntAccMessage>
          <Circle>!</Circle>Пользователя не существует
        </HasntAccMessage>
      ) : null}
      <AuthForm onSubmit={onSubmit}>
        <Labels htmlFor="login">Логин</Labels>
        <LoginInputs
          type="text"
          {...register("login", {
            required: true,
            maxLength: 22,
          })}
          id="login"
        />
        {errors.login && <RequiredField />}

        <Labels htmlFor="password">Пароль</Labels>
        <LoginInputs
          type="password"
          {...register("password", {
            required: true,
            maxLength: 22,
          })}
          id="password"
        />

        {errors.password && <RequiredField />}

        <CheckboxRox onClick={handleToggleCheckbox}>
          <CheckboxWrap>
            {toggleCheckbox ? <CheckboxTrue /> : null}
          </CheckboxWrap>
          <CheckboxText>Запомнить пароль</CheckboxText>
        </CheckboxRox>

        <LoginButton />
      </AuthForm>
    </Wrap>
  );
};
