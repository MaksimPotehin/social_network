import React, {Component} from "react";
import {connect} from "react-redux";
import axios from "axios";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/Redusers/profileReducer";

class ProfileContainer extends Component{

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId){
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return ( <Profile {...this.props} profile={this.props.profile}/> )
    }
}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
});

export default withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer));

