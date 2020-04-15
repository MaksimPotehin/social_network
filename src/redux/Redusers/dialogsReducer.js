import {ADD_MESSAGE, CHANGE_DIALOGS_VALUE} from "../actionType";

const initialState = {
    dialogsData : [
        { id:1, name:'Dimych'},
        { id:2, name:'Maks'},
        { id:3, name:'Taras'}
    ],
    messagesData : [
        { id:1, message:'Hello'},
        { id:2, message:'How is you name ?'},
        { id:3, message:'Yo'}
    ],
    textareaValue: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let body = state.textareaValue
            return {
                ...state,
                messagesData: [...state.messagesData, {id: Math.random() * 100 + action.text, message: body}],
                textareaValue: ''
            }
    }
        case CHANGE_DIALOGS_VALUE:{
            return {
                ...state, textareaValue: action.text
            }
        }
        default:
            return state
    }
};

export const addMessage = (text) => {
    return {type:'ADD_MESSAGE', text}
};

export const changeDialogsValue = (text) => {
    return {type:'CHANGE_DIALOGS_VALUE', text}
};

export default dialogsReducer