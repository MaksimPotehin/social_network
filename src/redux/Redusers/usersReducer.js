import {FOLLOW, IS_FOLLOWING, IS_LOADING, SET_CURRENT_PAGE, SET_USERS, TOTAL_COUNT, UNFOLLOW} from "../actionType";
import {usersApi} from "../../api/api";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    selectedPage:1,
    isLoading: true,
    isFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId){
                        return {...item, followed:true}
                    }else {
                        return item
                    }
                })
            };
        case UNFOLLOW:
            return { ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId){
                        return {...item, followed:false}
                    }else {
                        return item
                    }
                })
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
            return {...state,
                isFollowing: action.is_following ? [...state.isFollowing, action.userId]
                        : state.isFollowing.filter( id => id !== action.userId)}
        default:
            return state
    }
};





export const getUsers = (selectedPage, pageSize) => {
    return (dispatch) => {
        dispatch(is_loading(true))
        dispatch(set_page(selectedPage))
        usersApi.getUsers(selectedPage, pageSize)
            .then(response => {
                dispatch(is_loading(false))
                dispatch(set_users(response.data.items))
                dispatch(total_count(response.data.totalCount))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(is_following(true, userId))
        usersApi.follow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(followSuccess(userId))
                }
                dispatch(is_following(false, userId))
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(is_following(true,userId))
        usersApi.unfollow(userId)
            .then(response => {
                if(response.data.resultCode === 0){
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(is_following(false, userId))
            })
    }
}


export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
};
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
};
export const set_users = (users) => {
    return {type: SET_USERS , users}
};
export const total_count = (count) => {
    return {type: TOTAL_COUNT , count}
};
export const set_page = (selectedPage) => {
    return {type: SET_CURRENT_PAGE , selectedPage}
};
export const is_loading = (types) => {
    return {type: IS_LOADING , types}
};
export const is_following = (is_following, userId) => {
    return {type: IS_FOLLOWING , is_following, userId}
};



export default usersReducer
