import React from "react";
import s from '../Dialogs.module.css'
import {withRouter} from "react-router-dom";

const MessageItem = (item) => {
    return(
        <div className={s.message_item} key={item.id}>
            {item.message}
        </div>
    )
}

export default withRouter(MessageItem)