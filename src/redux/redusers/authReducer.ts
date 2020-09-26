import {GET_CAPTCHA_URL_SUCCESS, SET_AUTH_USER_DATA} from "../actionType";
import {authApi, securityApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export type initialStateAuth = typeof initialState

const authReducer = (state = initialState, action: any):initialStateAuth => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
};


export const auth = () => async (dispatch: any) => {
    let data = await authApi.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data;
        dispatch(setAuthData(id, email, login, true))
    }
}
export const userLogin = (email:string | null, password: number | string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let response = await authApi.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(auth())
        } else {
            if (response.data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            dispatch(stopSubmit("login", {_error: response.data.messages[0]}))
        }
    }
}
export const userLogout = () => {
    return async (dispatch: any) => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        let response = await securityApi.getCaptchaUrl()
        let captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}


type getCaptchaUrlSuccessType = {type: typeof GET_CAPTCHA_URL_SUCCESS, payload: string}
export const getCaptchaUrlSuccess = (captchaUrl:string):getCaptchaUrlSuccessType => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: captchaUrl}
};


type setAuthDataActionDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}
type setAuthDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    data: setAuthDataActionDataType
}
export const setAuthData = (id:any, email:string | null , login: string | null, isAuth:boolean): setAuthDataActionType => {
    return {type: SET_AUTH_USER_DATA, data: {id, email, login, isAuth}}
};

export default authReducer