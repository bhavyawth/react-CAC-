import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
  userId: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
      state.userId = action.payload.$id;
    },
    logout: (state, action) => {
      state.status = false;
      state.userData = null;
      state.userId = null;
    }
  }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;