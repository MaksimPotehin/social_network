import {ADD_POST, DELETE_POST, FORM_EDIT_MODE, SET_PROFILE_PHOTO, SET_STATUS, SET_USER_PROFILE} from "../actionType";
import {profileApi} from "../../api/api";
import {PostType, ProfileType} from "../../types/types";


const initialState = {
    postsData: [
        {id: 1, message: 'First post', likeCount: 12},
        {id: 1, message: 'Hey hey hey', likeCount: 9},
        {id: 1, message: 'Yo', likeCount: 34}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    formEditMode: false,
    status: ''
}

export type initialStateProfileReducer = typeof initialState

const profileReducer = (state = initialState, action: any):initialStateProfileReducer => {
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
        case FORM_EDIT_MODE: {
            return {
                ...state, formEditMode: action.payload
            }
        }
        case SET_PROFILE_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state
    }
};


export const getProfileInfo = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileApi.getProfile(userId)
        dispatch(setUserProfile(data))
    }
}
export const getProfileStatus = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileApi.getStatus(userId)
        dispatch(setStatus(data))
    }
}
export const updateStatus = (status: string) => {
    return async (dispatch: any) => {
        let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const updateProfileData = (profileData: ProfileType) => {
    return async (dispatch:any, getState:any) => {
        const userId = getState().authProfile.id
        const response = await profileApi.updateProfileData(profileData)
        if (response.data.resultCode === 0) {
            dispatch(getProfileInfo(userId))
            dispatch(onEditMode(false))
        }
    }
}

export const updateProfilePhoto = (photoFile: string | null) => {
    return async (dispatch: any) => {
        let response = await profileApi.setPhoto(photoFile)
        if (response.data.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.data.photos))
        }
    }
}

type EditModeType = {
    type: typeof FORM_EDIT_MODE
    payload: boolean
}
export const onEditMode = (payload: boolean): EditModeType => {
    return {type: FORM_EDIT_MODE, payload }
}

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number | null
}
export const deletePost = (postId: number | null): DeletePostType => {
    return {type: DELETE_POST, postId}
}

type SetStatusType = {
    type: typeof SET_STATUS
    status : string | null
}
export const setStatus = (status : string | null): SetStatusType => {
    return {type: SET_STATUS, status}
};

type AddPostType = {
    type: typeof ADD_POST
    text: string | null
}
export const addPost = (text: string | null): AddPostType => {
    return {type: ADD_POST, text}
};

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
    return {type: SET_USER_PROFILE, profile}
};

type SetProfilePhotoType = {
    type: typeof SET_PROFILE_PHOTO
    photos: string | null
}
export const setProfilePhoto = (photos: string | null): SetProfilePhotoType => {
    return {type: SET_PROFILE_PHOTO, photos}
};


export default profileReducer
