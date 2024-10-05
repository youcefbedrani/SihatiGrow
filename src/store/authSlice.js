import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.email = "";
      state.password = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
