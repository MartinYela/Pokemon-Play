import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    token: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.token = payload.token;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    logout: (state) => {
      state.status = "not-authenticated";
      state.token = null;
    },
  },
});

export const { login, checkingCredentials, logout } = authSlice.actions;
