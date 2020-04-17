import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = (props) =>{
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink} >News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink} >Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink} >Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeLink} >Users</NavLink>
            </div>
            <h2 className={s.friends_title}>Friends:</h2>
            <div className={s.friends}>
                {props.sidebar.friends.map((item) => (<div className={s.friends_item} key={item.id + item.name}>
                    <div className={s.avatar} key={item.id}>
                        <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
                    </div>
                    <p>{item.name}</p>
                </div>))}
            </div>
        </nav>
    )
}
export default Nav