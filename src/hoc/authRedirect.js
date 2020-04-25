import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export let withAuthRedirect = (Component) => {
    let mapStateToProps = (state) => ({
        isAuth: state.authProfile.isAuth
    })

    class authRedirect extends React.Component{
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>
            return <Component{...this.props}/>
        }
    }

    return connect(mapStateToProps,)(authRedirect)
}

