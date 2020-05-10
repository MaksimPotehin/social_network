import React from "react";
import s from "./Login.module.css"
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createdField, Input} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, minLengthCreator, required} from "../../helper/FormValidation/FromValidation";
import {userLogin} from "../../redux/redusers/AuthReducer";
import {Redirect} from "react-router-dom";


const maxLength = maxLengthCreator(20)
const minLength = minLengthCreator(6)

const LoginForm = ({captchaUrl, handleSubmit, error}) => {
    return(
        <form onSubmit={handleSubmit} className={s.login_form}>
            <div className={s.form_group}>
                {createdField('Email',[required,maxLength, minLength], 'Input' , 'Email', 'text')}
            </div>
            <div className={s.form_group}>
                {createdField('Password',[required,maxLength, minLength], 'Input' , 'Password', 'password')}
            </div>
            <div className={s.form_group}>
                {createdField(null,[], 'input' , 'rememberMe', 'checkbox')}
            </div>
            {error ? <div className={s.formError}>
                {error}
            </div> : null }
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createdField('symbol from image',[required], 'input' , 'captcha', 'text')}
            <button className={s.btn}>Login</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let { Email, Password, rememberMe, captcha } = formData
        props.userLogin( Email, Password, rememberMe, captcha )
    }
    if(props.isAuth){
        return <Redirect to='/profile'/>
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm setUserLogin={props.userLogin} captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}
let  mapStateToProps = (state) =>{
    return{
        isAuth: state.authProfile.isAuth,
        captchaUrl: state.authProfile.captchaUrl
    }
}

export default connect(mapStateToProps,{userLogin})(Login)