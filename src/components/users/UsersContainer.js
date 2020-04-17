import React, {Component} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {follow, is_loading, set_page, set_users, total_count, unfollow} from "../../redux/Redusers/usersReducer";
import axios from "axios";
import Preloader from "../Preloader/Preloader";

class UsersComponent extends Component{

    componentDidMount() {
        this.props.is_loading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.is_loading(false)
                this.props.set_users(response.data.items)
                this.props.total_count(response.data.totalCount)
            })
    }

    selectPage = (item) => {
        this.props.is_loading(true)
        this.props.set_page(item)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${item}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.is_loading(false);
                this.props.set_users(response.data.items)
            })
    };
    render() {
        return <>
            {this.props.isLoading ?
                    <Preloader/>
                : <Users
                    selectPage={this.selectPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    selectedPage={this.props.selectedPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    totalUsersCount= {this.props.totalUsersCount}
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
        isLoading: state.usersPage.isLoading
    }
};

// let mapDispatchToProps = (dispatch) => {
//     return{
//         onFollow: (userId) => dispatch(follow(userId)),
//         onUnFollow: (userId) => dispatch(unfollow(userId)),
//         onSetUsers: (users) => dispatch(set_users(users)),
//         onSetPage: (selectedPage) => dispatch(set_page(selectedPage)),
//         setTotalCount: (selectedPage) => dispatch(total_count(selectedPage)),
//         is_loading: (types) => dispatch(is_loading(types))
//     }
// };

const UsersContainer = connect(mapStateToProps, {follow, unfollow, set_users, set_page, total_count, is_loading})(UsersComponent);

export default UsersContainer