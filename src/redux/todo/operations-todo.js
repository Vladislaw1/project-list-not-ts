import {TaskService} from "./service";
import {
    addTodoRequest,
    addTodoSuccess,
    deleteTodoError,
    deleteTodoRequest,
    deleteTodoSuccess,
    getAllTodosError,
    getAllTodosRequest,
    getAllTodosSuccess, getNexTodosPageError,
    getNexTodosPageRequest,
    getNexTodosPageSuccess,
    patchTodoError,
    patchTodoRequest,
    patchTodoSuccess
} from "./action-todo";

const service = new TaskService();

export const getAllTask = (endpoint,page) => async dispatch => {
    dispatch(getAllTodosRequest())
    try {
        const data = await service.getTodo(endpoint,page)
        dispatch(getAllTodosSuccess(data))
    }catch(e){
        dispatch(getAllTodosError(e))
    }
}

export const getNextPageTask = (endpoint,page) => async dispatch => {
    dispatch(getNexTodosPageRequest())
    try {
        const data = await service.getTodo(endpoint,page)
        dispatch(getNexTodosPageSuccess(data))
    }catch(e){
        dispatch(getNexTodosPageError(e))
    }
}

export const deleteTodo = (endpoint,id) => async dispatch => {
    dispatch(deleteTodoRequest())
    try {
        await service.deleteTodo(endpoint,id)
        dispatch(deleteTodoSuccess(id))
    }catch (e) {
        dispatch(deleteTodoError(e))
    }
}

export const postTodo = (endpoint,body) => async dispatch => {
    dispatch(addTodoRequest())
    try {
        const data = await service.addTodo(endpoint,body)
        dispatch(addTodoSuccess(data))
    }catch (e) {

    }
}

export const patchTodo = (endpoint,id,body) => async dispatch => {
    dispatch(patchTodoRequest())
    try {
        const data = await service.patchTodo(endpoint,id,body)
        dispatch(patchTodoSuccess(data))
    }catch (e) {
        dispatch(patchTodoError(e.message))
    }
}