import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, is_following, is_loading,
    requestUsers, total_count, unfollow,
} from "../../redux/redusers/usersReducer";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {
    getIsFollowing, getIsLoading, getPageSize,
    getSelectedPage, getTotalUsersCount, getUsers
} from "../../redux/selectors/usersSelector";

class UsersComponent extends Component{

    componentDidMount() {
        this.props.requestUsers(this.props.selectedPage, this.props.pageSize)
    }

    selectPage = (item) => {
        this.props.requestUsers(item, this.props.pageSize)
    };
    render() {
        return <>
            {this.props.isLoading ?
                    <Preloader/>
                : <Users
                    selectPage={this.selectPage}
                    isFollowing={this.props.isFollowing}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    selectedPage={this.props.selectedPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    totalItemsCount= {this.props.totalUsersCount}
                    getUsers={this.props.requestUsers}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        selectedPage: getSelectedPage(state),
        isLoading: getIsLoading(state),
        isFollowing: getIsFollowing(state)
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, total_count, is_loading, is_following, requestUsers }),
    // withAuthRedirect
)(UsersComponent)
