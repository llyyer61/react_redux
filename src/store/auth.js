import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logou(state) {
      state.isAuthenticated = false;
    },
  },
});

// 创建 redux 的 action
export const authActions = authSlice.actions;

export default authSlice.reducer;
