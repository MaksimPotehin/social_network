import React from "react";
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (item) => {
    return(
        <div className={s.item} key={item.name + Math.random() + 1}>
            <NavLink to={'/dialogs/' + item.id} activeClassName={s.active} >{item.name}</NavLink>
        </div>
    )
}
export default DialogItem