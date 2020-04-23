import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {getProfile, setUserProfile} from "../../redux/Redusers/profileReducer";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId){
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile} getProfile={this.props.getProfile}/> )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
});
export default compose(
    connect(mapStateToProps, {setUserProfile, getProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)