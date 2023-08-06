import pokeApi from "../../config/pokeAPI";
import { LoginData, LoginResponse } from "./type";

export const onLogin = async (loginData: LoginData) => {
  const response = await pokeApi.post<LoginResponse>("/auth/login", loginData);

  return new Promise<LoginResponse>((resolve, reject) => {
    if (response.status === 200) resolve(response.data);
    else reject(response.data);
  });
};
