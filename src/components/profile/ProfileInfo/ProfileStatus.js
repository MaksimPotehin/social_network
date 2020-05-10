import React, {useEffect, useState} from "react";
import s from "../Profile.module.css";

const ProfileStatus = (props) => {

    let [editMode , setEditMode] = useState(false)
    let [status , setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    let editModeOn = () => {
        if (props.isOwner){
            setEditMode(true)
        }
    }
    let editModeOff = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let changeStatusValue = (e) => {
        let value = e.target.value
        setStatus(value)
    }


    return(
        <div className={s.profile_status}>
            {
                editMode ?
                    <input autoFocus={true} onBlur={editModeOff} onChange={(e) => changeStatusValue(e)} value={status} type="text" />
                    : <div onDoubleClick={editModeOn}>{status || "-----"}</div>
            }
        </div>
    )
}
export default ProfileStatus
