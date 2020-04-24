import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = (props) =>{
    if (!props.profile){
        return <Preloader/>
    }
    return(
        <div className={s.content}>
            <ProfileInfo profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
