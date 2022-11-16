function login(id, password) {
    return (dispatch, getState) => {
        console.log("middle");
        dispatch({type:"LOGIN_SUCCESS", payload: { id, password }});
    };
}

export const authenticateAction = {login};