import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
        isAuth: state.authProfile.isAuth
})

export let withAuthRedirect = (Component) => {

    class authRedirect extends React.Component{
        render() {
            console.log('props', this.props.isAuth)
            if (!this.props.isAuth) return <Redirect to={'/login'}/>


            return <Component{...this.props}/>
        }
    }

    return connect(mapStateToProps,)(authRedirect)
}

