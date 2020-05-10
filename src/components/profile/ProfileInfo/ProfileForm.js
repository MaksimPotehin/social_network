import s from "../Profile.module.css";
import React from "react";
import {createdField, Input, Textarea} from "../../common/FormsControl/FormsControl";
import {required} from "../../../helper/FormValidation/FromValidation";
import {reduxForm} from "redux-form";

const ProfileForm = ({profile, handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit} className={s.info}>
            <button>Save</button>
            <div>
                <div>
                    <b>Full name </b>: {createdField('Full name',[required], Input , 'fullName', 'text')}
                </div>
                <div>
                    <b>About me </b>: {createdField('About me',[], Textarea , 'aboutMe', 'text')}
                </div>
                <div>
                    <b>Looking for a job </b>: {createdField('',[], Input , 'lookingForAJob', 'checkbox')}
                </div>
                <div><b>LookingForAJobDescription : </b>
                    {createdField('About my professional skills',[], Textarea , 'lookingForAJobDescription', 'text')}
                </div>
            </div>
            <div className={s.contacts}>
                <b>Contacts </b>: {Object.keys(profile.contacts).map((item) => (
                    <div className={s.item}>
                        <i>{item}</i>: {profile.contacts[item]}
                        {createdField(item,[], Input , 'contacts.'+ item, 'text')}
                    </div>
                )
            )}
            </div>
        </form>
    )
}

const ProfileEditorReduxForm = reduxForm({form: 'profileEditor'})(ProfileForm)

export default ProfileEditorReduxForm