import React from "react";
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {setUserLogin} from "../../redux/Redusers/AuthReducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.login_form}>
            <div className={s.form_group}>
                <Field type={"text"} name={'Email'} placeholder={"Email"} component={'input'}/>
            </div>
            <div className={s.form_group}>
                <Field type={"text"} name={'Password'} placeholder={"Password"} component={'input'}/>
            </div>
            <div className={s.form_group}>
                <Field id='remember_me' name={'rememberMe'} type={"checkbox"} component={'input'}/>
                {/*<label htmlFor="remember_me">remember me</label>*/}
            </div>
            <button className={s.btn}>Login</button>
        </form>
    )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.setUserLogin(formData)
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm setUserLogin={props.setUserLogin} onSubmit={onSubmit} />
        </div>

    )
}
let  mapStateToProps = (state) =>{
    return{
        auth: state.authProfile.isAuth
    }
}

export default connect(mapStateToProps,{setUserLogin})(Login)