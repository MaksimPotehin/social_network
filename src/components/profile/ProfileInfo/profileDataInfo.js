import s from "../Profile.module.css";
import React from "react";


const ProfileDataInfo = ({isOwner, profile, onEditMode}) => {
    return(
        <div className={s.info}>
            { isOwner && <button onClick={() => {onEditMode(true)}}>Edit</button> }
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
                {profile.lookingForAJob &&
                <div><b>lookingForAJobDescription :</b>{profile.lookingForAJobDescription}</div>}
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
    )
}


export default ProfileDataInfo