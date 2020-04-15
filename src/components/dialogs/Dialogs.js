import React from "react";
import s from './Dialogs.module.css'
import MessageItem from "./messageItem/MessageItem";
import DialogItem from "./dialogItem/DialogItem";


const Dialogs = (props) => {
    console.log('props', props)

    let state = props.dialogsPage;
    let newMessage = React.createRef();

    let addNewMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text)
    };

    let textareaValue = () => {
        let new_text = newMessage.current.value;
        props.textareaValue(new_text)
    };

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {state.dialogsData.map((item) => DialogItem(item))}
            </div>
            <div className={s.messages}>
                {state.messagesData.map((item) => MessageItem(item))}
            </div>
                <textarea ref={newMessage}  value={state.textareaValue} onChange={textareaValue} cols="40" rows="5"></textarea>
                <button onClick={addNewMessage}>Send</button>
        </div>
    )
};
export default Dialogs