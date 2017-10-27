import React from "react";
import {render} from "react-dom";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";

import App from './containers/App';
import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';


const myLogger = (store) => (next) => (action) => {
    console.log("This is the action", action);
    next(action);
 }

store.dispatch({
    type:"ADD",
    payload:1000
});

store.dispatch({
    type:"SUBTRACT",
    payload:100
});

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    window.document.getElementById('app'));