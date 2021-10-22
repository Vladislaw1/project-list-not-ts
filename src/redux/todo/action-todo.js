import {createAction} from "@reduxjs/toolkit";

export const getAllTodosRequest = createAction("getAllTodosRequest")
export const getAllTodosSuccess = createAction("getAllTodosSuccess")
export const getAllTodosError = createAction("getAllTodosError")

export const getNexTodosPageRequest = createAction("getNexTodosPageRequest")
export const getNexTodosPageSuccess = createAction("getNexTodosPageSuccess")
export const getNexTodosPageError = createAction("getNexTodosPageError")

export const deleteTodoRequest = createAction("deleteTodoRequest")
export const deleteTodoSuccess = createAction("deleteTodoSuccess")
export const deleteTodoError = createAction("deleteTodoError")

export const addTodoRequest = createAction("addTodoRequest")
export const addTodoSuccess = createAction("addTodoSuccess")
export const addTodoError = createAction("addTodoError")

export const patchTodoRequest = createAction("addTodoRequest")
export const patchTodoSuccess = createAction("patchTodoSuccess")
export const patchTodoError = createAction("patchTodoError")