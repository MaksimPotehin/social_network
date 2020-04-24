import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers,
    is_following,
    is_loading,
    total_count, unfollow,
} from "../../redux/Redusers/usersReducer";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/authRedirect";
import Dialogs from "../dialogs/Dialogs";

class UsersComponent extends Component{

    componentDidMount() {
        this.props.getUsers(this.props.selectedPage, this.props.pageSize)
    }

    selectPage = (item) => {
        this.props.getUsers(item, this.props.pageSize)
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
                    totalUsersCount= {this.props.totalUsersCount}
                    getUsers={this.props.getUsers}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage,
        isLoading: state.usersPage.isLoading,
        isFollowing: state.usersPage.isFollowing
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, total_count, is_loading, is_following, getUsers }),
    // withAuthRedirect
)(UsersComponent)
