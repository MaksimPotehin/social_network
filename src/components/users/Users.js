import React from "react";
import s from './Users.module.css'
import default_avatar from '../../assets/images/631929649c.png'
import {NavLink} from "react-router-dom";
import Pagination from "../common/Pagination/Pagination";


let Users = (props) => {
    console.log('render')
    let {selectPage, selectedPage, pageSize, totalItemsCount, users} = props;

    return(
        <div className={s.users_wrapper}>
            <Pagination
                        pageSize={pageSize}
                        selectPage={selectPage}
                        selectedPage={selectedPage}
                        pagesInArray={10}
                        totalItemsCount={totalItemsCount}
            />
            {users.map((user) => (
                <div className={s.users_block} key={user.id}>
                    <div className={s.avatar_block}>
                        <NavLink to={'profile/' + user.id}>
                            <img className={s.avatar} src={user.photos.small != null ? user.photos.small : default_avatar} alt=""/>
                        </NavLink>
                        {user.followed ?
                            <button disabled={props.isFollowing.some( id => id === user.id)} onClick={() => props.unfollow(user.id)} >UnFollow</button>
                            : <button disabled={props.isFollowing.some( id => id === user.id)} onClick={() => props.follow(user.id)}>Follow</button> }
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
        </div>
    )
}
export default Users