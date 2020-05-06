import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {
    getProfileInfo,
    getProfileStatus, onEditMode,
    setUserProfile, updateProfileData, updateProfilePhoto,
    updateStatus
} from "../../redux/redusers/profileReducer";
import {compose} from "redux";
import {getEditMode, getIsAuth, getProfile, getStatus, getUserId} from "../../redux/selectors/profileSelectors";

class ProfileContainer extends Component{

    refreshProfile = () => {
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
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id != prevProps.match.params.id){
            this.refreshProfile()
        }
    }

    render() {
        let {profile, onEditMode, updateStatus, status, getProfile, formEditMode, updateProfileData, updateProfilePhoto} = this.props;
        let isOwner = !this.props.match.params.id
        return ( <Profile {...this.props}
                          updateProfileData={updateProfileData}
                          profile={profile}
                          onEditMode={onEditMode}
                          formEditMode={formEditMode}
                          updateStatus={updateStatus}
                          status={status}
                          getProfile={getProfile}
                          updateProfilePhoto={updateProfilePhoto}
                          isOwner={isOwner}
        /> )
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    userId: getUserId(state),
    isAuth: getIsAuth(state),
    formEditMode: getEditMode(state)
});
export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileInfo, getProfileStatus, updateStatus, onEditMode, updateProfileData, updateProfilePhoto }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)