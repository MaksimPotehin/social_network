import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {
    getProfileInfo,
    getProfileStatus,
    setUserProfile,
    updateStatus
} from "../../redux/redusers/profileReducer";
import {compose} from "redux";
import {getIsAuth, getProfile, getStatus, getUserId} from "../../redux/selectors/profileSelectors";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId){
            userId = this.props.userId
            if (!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getProfileInfo(userId)
        this.props.getProfileStatus(userId)
    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus} status={this.props.status} getProfile={this.props.getProfile}/> )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    userId: getUserId(state),
    isAuth: getIsAuth(state)
});
export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileInfo, getProfileStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)