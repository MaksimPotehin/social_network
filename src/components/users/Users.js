import React from "react";
import s from './Users.module.css'
import default_avatar from '../../assets/images/631929649c.png'
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let {selectedPage, pageSize, totalUsersCount, users } = props;
    let pageCount = Math.ceil(totalUsersCount / pageSize) ;
    let pages = [];
    for (let i = 1 ; i <= pageCount; i++){
        pages.push(i)
    }
    return(
        <div className={s.users_wrapper}>
            {users.map((user) => (
                <div className={s.users_block} key={user.id}>
                    <div className={s.avatar_block}>
                        <NavLink to={'profile/' + user.id}>
                            <img className={s.avatar} src={user.photos.small != null ? user.photos.small : default_avatar} alt=""/>
                        </NavLink>
                        {user.followed ?
                            <button onClick={() => props.unfollow(user.id)} >UnFollow</button>
                            : <button onClick={() => props.follow(user.id)}>Follow</button> }
                    </div>
                    <div className={s.general_info}>
                        <div>
                            <div className={s.fullName}>{user.name}</div>
                            <div className={s.status}>{user.status}</div>
                        </div>
                        <div className='location'>
                            <div className={s.cityName}>{"user.location.city"}</div>
                            <div className={s.countryName}>{"user.location.country"}</div>
                        </div>
                    </div>
                </div>
            ))}
            <div className={s.pagination}>
                {pages.map((item,idx)=>{
                    return <span onClick={() => props.selectPage(item)} className={(selectedPage === item ? s.selected + ' ':'') + s.page} key={idx}> {item} </span>
                })}
            </div>
        </div>
    )
}
export default Users