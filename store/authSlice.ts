import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

//type of our state
export interface AuthState {
  authState: boolean;
}

//initial state
const initialState: AuthState = {
  authState: false,
};

//authState action type
export type AuthAction = {
  payload: boolean;
};

//Actual auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //action to set the authentication status
    setAuthState(state: AuthState, action: AuthAction) {
      state.authState = action.payload;
    },

    //special reducer for hydrating the state. special case for next-redux-wrapper
    extraReducers: {
      //@ts-ignore
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

export const { setAuthState } = authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth.authState;
export default authSlice.reducer;
