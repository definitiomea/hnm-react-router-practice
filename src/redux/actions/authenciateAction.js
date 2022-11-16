import { authenciateActions } from "../reducers/authenticateReducer";

function login(id, password) {
    return (dispatch, getState) => {
        console.log("middle");
        dispatch(authenciateActions.logIn(id, password));
    };
}

function logout() {
    return (dispatch, getState) => {
        console.log("logout middle");
        dispatch(authenciateActions.logOut());
    }
}

export const authenticateAction = {login, logout};