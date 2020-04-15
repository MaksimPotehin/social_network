import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, set_page, set_users, total_count, unfollow} from "../../redux/Redusers/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return{
        onFollow: (userId) => dispatch(follow(userId)),
        onUnFollow: (userId) => dispatch(unfollow(userId)),
        onSetUsers: (users) => dispatch(set_users(users)),
        onSetPage: (selectedPage) => dispatch(set_page(selectedPage)),
        setTotalCount: (selectedPage) => dispatch(total_count(selectedPage))

    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer