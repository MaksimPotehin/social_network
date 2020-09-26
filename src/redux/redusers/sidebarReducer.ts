import {UserType} from "../../types/types";


const initialState = {
    friends:[
        {id:1, name: "Andry", status:'', photos: ''},
        {id:2, name: "Maks", status:'', photos: ''},
        {id:3, name: "Alex", status:'', photos: ''}
    ]
};
type sidebarReducerType = typeof initialState
const sidebarReducer = (state = initialState, action: any):sidebarReducerType => {

    return state
};
export default sidebarReducer
