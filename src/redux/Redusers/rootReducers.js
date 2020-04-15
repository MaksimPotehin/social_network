import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import {combineReducers} from "redux";
import usersReducer from "./usersReducer";

export let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
});