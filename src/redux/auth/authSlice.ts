import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface IUser {
  name?: string;
  email: string;
  password: string;
}
interface IAuthState {
  user: null | IUser;
//   token:null|string;
}
const initialState: IAuthState = {
  user: null,
//   token:null
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
          },
    logOut: (state) => {
      state.user = null;
      // state.token=null
    },
  },
});
export const {setUser,logOut}=authSlice.actions;
export default authSlice.reducer;
export const currentUser=(state:RootState)=>state.auth.user;
// export const currentToken=(state:RootState)=>state.auth.token;