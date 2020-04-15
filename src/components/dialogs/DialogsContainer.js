import React from "react";
import {addMessage, changeDialogsValue} from "../../redux/Redusers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage : state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (text) => dispatch(addMessage(text)),
        textareaValue: (new_text) => dispatch(changeDialogsValue(new_text))
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

