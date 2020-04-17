import {FOLLOW, IS_LOADING, SET_CURRENT_PAGE, SET_USERS, TOTAL_COUNT, UNFOLLOW} from "../actionType";

const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    selectedPage:1,
    isLoading: true
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
        default:
            return state
    }
};

export const follow = (userId) => {
    return {type: FOLLOW, userId}
};

export const unfollow = (userId) => {
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

export default usersReducer
