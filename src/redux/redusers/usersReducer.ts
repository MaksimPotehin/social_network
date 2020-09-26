import {
    FOLLOW,
    IS_FOLLOWING,
    IS_LOADING,
    SET_CURRENT_PAGE,
    SET_PROFILE_PHOTO,
    SET_USERS,
    TOTAL_COUNT,
    UNFOLLOW
} from "../actionType";
import {usersApi} from "../../api/api";
import {updateObjInArray} from "../../helper/objectHelper";
import {UserType} from "../../types/types";

const initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    selectedPage: 1,
    isLoading: true,
    isFollowing: [] as Array<number> // array of users id
};

type initialStateUsersReducer = typeof initialState

export const usersReducer = (state = initialState, action: any): initialStateUsersReducer => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjInArray(state.users, action.userId, "id", {followed: false})
            };
        case SET_USERS:
            return {...state, users: [...action.users]}

        case TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}

        case SET_CURRENT_PAGE:
            return {...state, selectedPage: action.selectedPage}

        case IS_LOADING:
            return {...state, isLoading: action.types}

        case IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.is_following ? [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};


export const requestUsers = (selectedPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(is_loading(true))
        dispatch(set_page(selectedPage))
        let response = await usersApi.getUsers(selectedPage, pageSize)
        dispatch(set_users(response.data.items))
        dispatch(total_count(response.data.totalCount))
        dispatch(is_loading(false))
    }
}

export const follow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(is_following(true, userId))
        let response = await usersApi.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(is_following(false, userId))
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        dispatch(is_following(true, userId))
        let response = await usersApi.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(is_following(false, userId))
    }
}

type FollowSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number):FollowSuccessType => {
    return {type: FOLLOW, userId}
};

type UnfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => {
    return {type: UNFOLLOW, userId}
};

type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const set_users = (users: Array<UserType>): SetUsersType => {
    return {type: SET_USERS, users}
};

type TotalCountType = {
    type: typeof TOTAL_COUNT
    count: number
}
export const total_count = (count: number): TotalCountType => {
    return {type: TOTAL_COUNT, count}
};

type SetPageType = {
    type: typeof SET_CURRENT_PAGE
    selectedPage: number
}
export const set_page = (selectedPage: number): SetPageType => {
    return {type: SET_CURRENT_PAGE, selectedPage}
};

type IsLoadingType = {
    type: typeof IS_LOADING
    types: boolean
}
export const is_loading = (types: boolean): IsLoadingType => {
    return {type: IS_LOADING, types}
};

type IsFollowing = {
    type: typeof IS_FOLLOWING
    is_following: any
    userId: number
}
export const is_following = (is_following: any, userId: number): IsFollowing => {
    return {type: IS_FOLLOWING, is_following, userId}
};
