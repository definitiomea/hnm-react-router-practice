function login(id, password) {
    return (dispatch, getState) => {
        console.log("middle");
        dispatch({type:"LOGIN_SUCCESS", payload: { id, password }});
    };
}

function logout() {
    return (dispatch, getState) => {
        console.log("logout middle");
        dispatch({type:"LOGOUT_SUCCESS"});
    }
}

export const authenticateAction = {login, logout};