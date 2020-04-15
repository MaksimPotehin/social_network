import s from "../Profile.module.css";
import React from "react";

const ProfileInfo = (props) =>{
    return(
        <div>
            <div className={s.banner}>
                <img src='https://c.pxhere.com/photos/e5/da/bali_nature_mountain_pond_volcano_tropical_indonesia_travel-491536.jpg!d' alt=""/>
            </div>
            <div className={`${s.avatar} ${s.item}`}>
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
                {props.message}
            </div>
        </div>
    )
}
export default ProfileInfo