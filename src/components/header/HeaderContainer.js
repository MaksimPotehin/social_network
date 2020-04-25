import React, {Component} from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, userLogout} from "../../redux/Redusers/AuthReducer";
import {initializeApp} from "../../redux/Redusers/appReducer";


class HeaderContainer extends Component{

    render() {
        return <Header {...this.props} userLogout={this.props.userLogout} authProfile={this.props.authProfile}/>
    }
}
let mapStateToProps = (state) =>({
    authProfile: state.authProfile,
})

export default connect(mapStateToProps, {initializeApp, auth, userLogout})(HeaderContainer)
