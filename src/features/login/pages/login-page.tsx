import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { LoginButton } from "../atoms/login-button";
import { RequiredField } from "../atoms/required-field";
import { fetchAuth } from "../../../api/fetch-auth";
import { Redirect } from "react-router";
import { CheckboxRow } from "../molecules/checkbox-row";

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 640px;
`;

const LoginInputs = styled.input`
  background-color: #f5f5f5;
  border: 0;
  height: 60px;
  padding-left: 20px;
  border-radius: 8px;
  margin-bottom: 8px;
  &:focus {
    outline: 0;
  }
`;
const LoginInputTop = styled(LoginInputs)<any>`
  border: ${({ error }) => error && "1px solid #E26F6F"};
`;
const LoginInputBot = styled(LoginInputs)<any>`
  border: ${({ error }) => error && "1px solid #E26F6F"};
`;

const Labels = styled.label`
  margin-bottom: 10px;
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
const InputWrap = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
type FormValues = {
  login: string;
  password: string;
  savePassword: boolean;
};
type Props = {
  setLogin: (str: string) => void;
};
export const LoginPage: React.FC<Props> = ({
  setLogin,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();
  const [toggleCheckbox, setToggleCheckbox] = useState(
    false
  );
  const [hasAcc, setHasAcc] = useState<boolean | undefined>(
    undefined
  );
  const [redirectTo, setRedirectTo] = useState<boolean>(
    false
  );
  const [btnDisabled, setBtnDisabled] = useState<boolean>(
    false
  );

  useEffect(() => {
    const LoginValue = window.localStorage.getItem("login");
    if (LoginValue) {
      setRedirectTo(true);
    }
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      setBtnDisabled(true);
      const responseData = await fetchAuth(data);
      if (toggleCheckbox && responseData) {
        window.localStorage.setItem("login", data.login);
      }
      if (responseData) setLogin(data.login);
      setHasAcc(responseData);
      setBtnDisabled(false);
    } catch (err) {
      console.log(err);
    }
  });

  const handleToggleCheckbox = () => {
    setToggleCheckbox(!toggleCheckbox);
  };
  return redirectTo || hasAcc ? (
    <Redirect to="/profile" />
  ) : (
    <>
      <AuthForm onSubmit={onSubmit}>
        {hasAcc === false ? (
          <HasntAccMessage>
            <Circle>!</Circle>Пользователя{" "}
            {getValues().login} не существует
          </HasntAccMessage>
        ) : null}

        <InputWrap>
          <Labels htmlFor="login">Логин</Labels>
          <LoginInputTop
            type="text"
            {...register("login", {
              required: true,
              maxLength: 22,
            })}
            id="login"
            error={errors.login}
          />
          {errors.login && <RequiredField />}
        </InputWrap>

        <InputWrap>
          <Labels htmlFor="password">Пароль</Labels>
          <LoginInputBot
            type="password"
            {...register("password", {
              required: true,
              maxLength: 22,
            })}
            id="password"
            error={errors.password}
          />
          {errors.password && <RequiredField />}
        </InputWrap>

        <CheckboxRow
          onClick={handleToggleCheckbox}
          toggleCheckbox={toggleCheckbox}
        />

        <LoginButton disabled={btnDisabled} />
      </AuthForm>
    </>
  );
};
