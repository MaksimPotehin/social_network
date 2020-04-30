import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createdField, Input} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, minLengthCreator, required} from "../../helper/FormValidation/FromValidation";
import {userLogin} from "../../redux/redusers/AuthReducer";
import {Redirect} from "react-router-dom";


const maxLength = maxLengthCreator(20)
const minLength = minLengthCreator(6)

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.login_form}>
            <div className={s.form_group}>
                {createdField('Email',[required,maxLength, minLength], 'Input' , 'Email', 'text')}
            </div>
            <div className={s.form_group}>
                {createdField('Password',[required,maxLength, minLength], 'Input' , 'Password', 'password')}
            </div>
            <div className={s.form_group}>
                {createdField(null,[], 'input' , 'rememberMe', 'checkbox')}
            </div>
            {props.error ? <div className={s.formError}>
                {props.error}
            </div> : null }
            <button className={s.btn}>Login</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let { Email, Password, rememberMe } = formData
        props.userLogin( Email, Password, rememberMe )
    }
    if(props.isAuth){
        return <Redirect to='/profile'/>
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm setUserLogin={props.userLogin} onSubmit={onSubmit} />
        </div>

    )
}
let  mapStateToProps = (state) =>{
    return{
        isAuth: state.authProfile.isAuth
    }
}

export default connect(mapStateToProps,{userLogin})(Login)