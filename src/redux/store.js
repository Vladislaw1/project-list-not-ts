import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";

import todosReducer from "./todo/reducer-todo"
import thunk from "redux-thunk";

const middleware = getDefaultMiddleware(thunk)

export const store = configureStore({
    reducer:{
        todos: todosReducer
    },
    middleware
})