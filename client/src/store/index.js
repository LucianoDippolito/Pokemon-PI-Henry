// import { createStore, applyMiddleware } from "redux"
// import { composeWithDevTools } from "redux-devtools-extension"
// import thunk from "redux-thunk"
// import rootReducer from "../reducer"

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { createStore, applyMiddleware, compose } from 'redux'
import ThunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer/index'

const composeEnhacer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(ThunkMiddleware))
);

export default store