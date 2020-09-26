import {INITIALIZED_SUCCESS} from "../actionType";
import {auth} from "./authReducer";


const initialState = {
    initialized: false,
}

export type initialStateApp = typeof initialState

const authReducer = (state= initialState, action:any):initialStateApp => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
};

export const initializeApp = () => (dispatch:any) => {
    let authPromise = dispatch(auth())
    authPromise.then(()=>{
        dispatch(initialized_success())
    })
}


type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initialized_success = ():initializedSuccessActionType => {
    return {type:INITIALIZED_SUCCESS}
};

export default authReducer