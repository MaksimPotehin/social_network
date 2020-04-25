import React from "react";
import s from './FormsControl.module.css'

export const Textarea = ({input, meta, ...props}) => {
    let isError = meta.touched && meta.error
    return(
        <div>
            <div className={s.formControl + ' ' + (isError ? s.error : '')}>
                <textarea {...input } {...props}/>
            </div>
            <div className={s.formControl + ' ' + (isError ? s.error : '')}>
                {isError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    let isError = meta.touched && meta.error
    return(
        <>
            <div className={s.formControl + ' ' + (isError ? s.error : '')}>
                <input {...input } {...props}/>
            </div>
            <div className={s.formControl + ' ' + (isError ? s.error : '')}>
                {isError && <span>{meta.error}</span>}
            </div>
        </>
    )
}