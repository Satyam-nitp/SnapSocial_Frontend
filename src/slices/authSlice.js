import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  signupData: null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};

const authSlice=createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setSignupData(state, value){
            state.signupData=value.payload;
        },
        setUser(state, value){
            state.user=value.payload;
        },
        setToken(state, value){
            state.token=value.payload;
        },
    },
});

export const { setSignupData, setUser, setToken } = authSlice.actions;

export default authSlice.reducer;