import s from "../Profile.module.css";
import React from "react";
import defaultAvatar from '../../../assets/images/631929649c.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    return(
        <div>
            <div className={`${s.avatar}`}>
                <img src={props.profile.photos.large ? props.profile.photos.large: defaultAvatar} alt=""/>
                <div className={s.info}>
                    <ProfileStatus updateStatus={props.updateStatus} status={props.status}/>
                    <strong>about </strong>: {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo