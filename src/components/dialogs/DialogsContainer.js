import React from "react";
import {addMessage} from "../../redux/redusers/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/authRedirect";
import {compose} from "redux";
import {getDialogsPage} from "../../redux/selectors/dialogsSelectors";


let mapStateToProps = (state) => {
    return{
        dialogsPage : getDialogsPage(state)
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (text) => dispatch(addMessage(text)),
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)


