import {applyMiddleware, createStore} from "redux";
import {reducers} from "./Redusers/rootReducers";
import reduxThunk from "redux-thunk";

let store = createStore(reducers, applyMiddleware(reduxThunk));

window.store = store

export default store