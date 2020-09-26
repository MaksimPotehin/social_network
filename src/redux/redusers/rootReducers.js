import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import authReducer from "./authReducer";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

export let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    authProfile:authReducer,
    form: formReducer,
    app: appReducer
});