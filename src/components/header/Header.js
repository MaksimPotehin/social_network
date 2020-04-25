import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    let Logout = () => {
        props.userLogout()
    }
    return(
        <header className={s.header}>
            <NavLink to='/profile'>
                <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-1024x768.png" alt=""/>
            </NavLink>
            <div className={s.auth_block}>
                {props.authProfile.isAuth
                    ? <div>{props.authProfile.login} - <div onClick={Logout}> Log out</div></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header