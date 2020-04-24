import {SET_AUTH_USER_DATA, SET_USER_LOGIN} from "../actionType";
import {authApi} from "../../api/api";

const initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
};


export const auth = () =>{
    return dispatch => {
        authApi.me()
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(setAuthData(data.data))
                }
            })
    }
}
export const setUserLogin = (loginData) =>{
    return dispatch => {
        authApi.login(loginData)
            .then(response => {
                if(response.data.resultCode === 0){
                    console.log(response.data.data.userId)
                    let data = response.data
                }
            })
    }
}

export const setAuthData = (data) => {
    return {type:SET_AUTH_USER_DATA, data}
};
// export const setUserLogin = (loginData) => {
//     return{type:SET_USER_LOGIN, loginData}
// }
export default authReducer