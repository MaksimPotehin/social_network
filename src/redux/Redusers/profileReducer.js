import {ADD_POST, CHANGE_VALUE} from "../actionType";

const initialState = {
    postsData : [
        { id:1, message:'First post', likeCount: 12},
        { id:1, message:'Hey hey hey', likeCount: 9},
        { id:1, message:'Yo', likeCount: 34}
    ],
    textareaValue: 'default'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: Math.random() * 100 + action.text,
                message: state.textareaValue,
                likeCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                textareaValue: ''
            }
    }
        case CHANGE_VALUE: {
            return {
                ...state, textareaValue: action.text
            }
        }
        default:
            return state
    }
};

export const addPost = (text) => {
    return {type:'ADD_POST', text}
};

export const changeValue = (text) => {
    return {type:'CHANGE_VALUE', text}
};

export default profileReducer
