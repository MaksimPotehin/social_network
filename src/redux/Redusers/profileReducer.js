import {ADD_POST, CHANGE_VALUE, SET_USER_PROFILE} from "../actionType";
import {getProfileApi, usersApi as getUsers} from "../../api/api";

const initialState = {
    postsData : [
        { id:1, message:'First post', likeCount: 12},
        { id:1, message:'Hey hey hey', likeCount: 9},
        { id:1, message:'Yo', likeCount: 34}
    ],
    textareaValue: 'default',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.random() * 100 + action.text,
                message: state.textareaValue,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                textareaValue: ''
            }
    }
        case CHANGE_VALUE: {
            return {
                ...state, textareaValue: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state
    }
};


export const getProfile = (userId) => {
    return dispatch => {
        getUsers.getProfile(userId)
        .then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const addPost = (text) => {
    return {type: ADD_POST, text}
};

export const changeValue = (text) => {
    return {type:CHANGE_VALUE, text}
};

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};

export default profileReducer
