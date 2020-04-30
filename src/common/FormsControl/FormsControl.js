import React from "react";
import s from './FormsControl.module.css'
import {Field} from "redux-form";
import {required} from "../../helper/FormValidation/FromValidation";

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

export const createdField = (placeholder, validate, component, name, type) => {
    return (
        <Field type={type}
               name={name}
               placeholder={placeholder}
               validate={validate}
               component={component}/>
    )
}