import {SET_AUTH_USER_DATA} from "../actionType";
import {authApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
};


export const auth = () => async (dispatch) => {
    let data = await authApi.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthData(id, email, login, true))
    }
}
export const userLogin = (email, password, rememberMe) => {
    return async dispatch => {
        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(auth())
        } else {
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
        }
    }
}
export const userLogout = () => {
    return async dispatch => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }
}

export const setAuthData = (id, email, login, isAuth) => {
    return {type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}}
};

export default authReducer