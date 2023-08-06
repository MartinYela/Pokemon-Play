import axios from "axios";
import { store } from "../store";

const url = "http://localhost:3001/";
const pokeApi = axios.create({
  baseURL: url,
});

const updateAuthToken = () => {
  const state = store.getState();
  const token = state.auth.token;
  if (token) {
    pokeApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

updateAuthToken();

store.subscribe(updateAuthToken);

export default pokeApi;
