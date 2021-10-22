import {combineReducers, createReducer} from "@reduxjs/toolkit";
import {
    addTodoSuccess,
    deleteTodoSuccess,
    getAllTodosError,
    getAllTodosRequest,
    getAllTodosSuccess, getNexTodosPageSuccess, patchTodoSuccess
} from "./action-todo";
import {state} from "../../client/components/CreateTodoForm/initialState";

const initialState = []

const todos = createReducer(initialState, {
        [getAllTodosSuccess]: (_, {payload}) => payload,
        [deleteTodoSuccess]: (state, {payload}) => {
            const idx = state.findIndex(item => item.id === payload)
            if (idx !== -1) {
                state.splice(idx, 1)
            }
        },
        [patchTodoSuccess]: (state, {payload}) => {
            const index = state.findIndex((item) => item.id === payload.id)
            if (index !== -1) {
                state[index] = {...payload}
            }
        },
        [addTodoSuccess]: (state, {payload}) => [payload, ...state]
    }
)

const loading = createReducer(false,{
    [getAllTodosSuccess]: () => false,
    [getAllTodosRequest]: () => true,
    [getAllTodosError]: () => false
})

const error = createReducer(null,{
    [getAllTodosSuccess]: () => null,
    [getAllTodosRequest]: () => null,
    [getAllTodosError]: (_,{payload}) => payload
})

export default combineReducers({
    todos,
    loading,
    error
})