import {ADD_POST, DELETE_POST, SET_STATUS, SET_USER_PROFILE} from "../actionType";
import {profileApi} from "../../api/api";

const initialState = {
    postsData: [
        {id: 1, message: 'First post', likeCount: 12},
        {id: 1, message: 'Hey hey hey', likeCount: 9},
        {id: 1, message: 'Yo', likeCount: 34}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.random() * 100,
                message: action.text,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            }
        }
        case DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(post => post.id != action.postId)
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        default:
            return state
    }
};


export const getProfileInfo = (userId) => {
    return async dispatch => {
        let data = await profileApi.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}
export const getProfileStatus = (userId) => {
    return async dispatch => {
        let data = await profileApi.getStatus(userId)
        dispatch(setStatus(data))
    }
}
export const updateStatus = (status) => {
    return async dispatch => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}
export const deletePost = (postId) => {
    return {type: DELETE_POST, postId}
}

export const setStatus = (status) => {
    return {type: SET_STATUS, status}
};

export const addPost = (text) => {
    return {type: ADD_POST, text}
};

export const setUserProfile = (profile) => {
    return {type: SET_USER_PROFILE, profile}
};


export default profileReducer
