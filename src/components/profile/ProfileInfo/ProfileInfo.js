import s from "../Profile.module.css";
import React from "react";
import defaultAvatar from '../../../assets/images/631929649c.png'
import ProfileStatus from './ProfileStatus'
import ProfileEditorReduxForm from "./ProfileForm";
import ProfileDataInfo from "./profileDataInfo";

const ProfileInfo = (props) => {

    let {profile, updateStatus, status, editMode, onEditMode, updateProfileData, updateProfilePhoto, isOwner} = props;

    const onSubmit = (formData) => {
        updateProfileData(formData)
    }
    let onSetPhoto = (e) => {
        if (e.target.files.length > 0) {
            updateProfilePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div className={`${s.avatar}`}>
                <img src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
                {isOwner && <input className={s.set_photo} type="file" onChange={onSetPhoto}/>}
                <ProfileStatus updateStatus={updateStatus} status={status}/>
            </div>
            {editMode
                ? <ProfileEditorReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <ProfileDataInfo onEditMode={onEditMode} profile={profile}/>
            }
        </div>
    )
};
export default ProfileInfo