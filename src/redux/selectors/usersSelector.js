import {createSelector} from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users
}
export const getUsersSuper = createSelector(getUsers,
    (users) => {
    return users.filter(user => user.id === 1)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getSelectedPage = (state) => {
    return state.usersPage.selectedPage
}
export const getIsLoading = (state) => {
    return state.usersPage.isLoading
}
export const getIsFollowing = (state) => {
    return state.usersPage.isFollowing
}
export const getAuthInfo = (state) => {
    return state.authProfile.isAuth
}
