import s from "../Profile.module.css";
import React from "react";
import defaultAvatar from '../../../assets/images/631929649c.png'
import ProfileStatus from './ProfileStatus'
import ProfileEditorReduxForm from "./ProfileForm";

const ProfileInfo = (props) => {

    let {profile, updateStatus, status, editMode, onEditMode, updateProfileData, updateProfilePhoto, isOwner} = props;

    const onSubmit = (formData) => {
        updateProfileData(formData)
        onEditMode(false)
    }
    let onSetPhoto = (e) => {
        if (e.target.files.length > 0){
            updateProfilePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={`${s.avatar}`}>
                <img src={profile.photos.large ? profile.photos.large : defaultAvatar} alt=""/>
                { isOwner && <input type="file" onChange={onSetPhoto}/>}
                <ProfileStatus updateStatus={updateStatus} status={status}/>
            </div>
            {editMode
                ? <ProfileEditorReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                : <div className={s.info}>
                <button onClick={()=>{onEditMode(true)}}>Edit</button>
                <div>
                    <div>
                        <b>Full name </b>: {profile.fullName}
                    </div>
                    <div>
                        <b>About me </b>: {profile.aboutMe}
                    </div>
                    <div>
                        <b>Looking for a job </b>: {profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    {profile.lookingForAJob && <div><b>lookingForAJobDescription </b></div>}
                </div>
                <div className={s.contacts}>
                    <b>Contacts </b>: {Object.keys(profile.contacts).map((item) => (
                        <div className={s.item}>
                            <i>{item}</i>: {profile.contacts[item]}
                        </div>
                    )
                )}
                </div>
            </div>
            }
        </div>
    )
};
export default ProfileInfo