import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <header className={s.header}>
            <NavLink to='/profile'>
                <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-1024x768.png" alt=""/>
            </NavLink>
        </header>
    )
}
export default Header