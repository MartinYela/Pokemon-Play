import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../store/auth/authSlice";
import { useMutation } from "react-query";
import { LoginData, LoginResponse } from "./type";
import { onLogin } from "./auth";

export const useLogin = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onLoginError = () => {
    setError(true);
    dispatch(logout());
  };

  const onSuccessLogin = (dispatchToken: LoginResponse) => {
    setError(false);
    dispatch(login(dispatchToken));
  };

  const { mutate } = useMutation(onLogin, {
    onError: onLoginError,
    onSuccess: onSuccessLogin,
  });

  const handleLogin = (loginData: LoginData) => {
    mutate(loginData);
  };

  return {
    error,
    handleLogin,
  };
};
