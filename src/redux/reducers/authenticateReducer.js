import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: "",
    password: "",
    authenciate: false
};

/* function authenciateReducer(state = initialState, action) {
    let { type, payload } = action;
    switch(type) {
        case "LOGIN_SUCCESS":
            console.log("login reducer here");
            return {
                ...state,
                id: payload.id,
                password: payload.password,
                authenciate: true
            }
        case "LOGOUT_SUCCESS":
            console.log("logout reducer here");
            return {
                ...state,
                id: "",
                password: "",
                authenciate: false
            }
        default:
            return { ...state }
    }
}

export default authenciateReducer; */

const authenciateSlice = createSlice({
    name: "authenciate",
    initialState,
    reducers: {
        logIn(state, action) {
            state.id = action.payload.id
            state.password = action.payload.password
            state.authenciate = true;
        },
        logOut(state, action) {
            state.id = ""
            state.password = ""
            state.authenciate = false
        }
    }
});

export const authenciateActions = authenciateSlice.actions;
export default authenciateSlice.reducer;