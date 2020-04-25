import {ADD_MESSAGE} from "../actionType";

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData: [...state.messagesData, {id: Math.random() * 100, message: action.text}],
            }
    }
        default:
            return state
    }
};

export const addMessage = (text) => {
    return {type:'ADD_MESSAGE', text}
};


export default dialogsReducer