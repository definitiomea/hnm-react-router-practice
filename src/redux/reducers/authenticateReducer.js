import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: "",
    password: "",
    authenciate: false
};

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