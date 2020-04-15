import {createStore} from "redux";
import {reducers} from "./Redusers/rootReducers";

let store = createStore(reducers);

window.store = store

export default store