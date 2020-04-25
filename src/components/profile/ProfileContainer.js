import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/Redusers/profileReducer";
import {compose} from "redux";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId){
            userId = this.props.userId
            if (!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus} status={this.props.status} getProfile={this.props.getProfile}/> )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.authProfile.id,
        isAuth: state.authProfile.isAuth
});
export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)