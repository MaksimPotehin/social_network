import {INITIALIZED_SUCCESS} from "../actionType";
import {auth} from "./AuthReducer";


const initialState = {
    initialized: false,
}

const authReducer = (state = initialState, action) => {
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

export const initializeApp = () => (dispatch) => {
    let authPromise = dispatch(auth())
    authPromise.then(()=>{
        dispatch(initialized_success())
    })
}

export const initialized_success = () => {
    return {type:INITIALIZED_SUCCESS}
};

export default authReducer