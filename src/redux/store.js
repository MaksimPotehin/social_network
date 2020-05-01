import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./redusers/rootReducers";
import reduxThunk from "redux-thunk";


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

window.store = store

export default store