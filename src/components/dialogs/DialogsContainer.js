import React from "react";
import {addMessage} from "../../redux/Redusers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return{
        dialogsPage : state.dialogsPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (text) => dispatch(addMessage(text)),
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(Dialogs)


