import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

const Profile = ({profile, onEditMode, formEditMode, updateStatus, status, updateProfileData, updateProfilePhoto, isOwner}) =>{
    if (!profile){
        return <Preloader/>
    }
    return(
        <div className={s.content}>
            <ProfileInfo updateProfileData={updateProfileData}
                         profile={profile}
                         onEditMode={onEditMode}
                         updateStatus={updateStatus}
                         status={status}
                         editMode={formEditMode}
                         updateProfilePhoto={updateProfilePhoto}
                         isOwner={isOwner}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile
