import React from "react";
import s from './Dialogs.module.css'
import MessageItem from "./messageItem/MessageItem";
import DialogItem from "./dialogItem/DialogItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../helper/FormValidation/FromValidation";


const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'textarea'}
                   name={'newMessage'}
                   component={Textarea}
                   validate={[required, maxLength50]}
                   cols="40" rows="5"
            />
            <button>Send</button>
        </form>
    )
}

let AddReduxMessageForm = reduxForm({form:'addMessage'})(AddMessageForm)

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let addNewMessage = (fromData) => {
        let text = fromData.newMessage
        props.addMessage(text)
    };


    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {state.dialogsData.map((item) => DialogItem(item))}
            </div>
            <div className={s.messages}>
                {state.messagesData.map((item) => MessageItem(item))}
            </div>
               <AddReduxMessageForm onSubmit={addNewMessage}/>
        </div>
    )
};
export default Dialogs
