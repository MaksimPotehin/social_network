import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, getStatus, setUserProfile, updateStatus} from "../../redux/Redusers/profileReducer";
import {compose} from "redux";
// import {withAuthRedirect} from "../../hoc/authRedirect";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId){
            userId = this.props.userId || 7284
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
        userId: state.authProfile.id
});
export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)