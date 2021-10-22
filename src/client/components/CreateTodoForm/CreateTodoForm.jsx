import React, {useCallback, useState} from 'react';

import useForm from "../../../shared/hooks/useForm"
import {useDispatch} from "react-redux";

import {state} from "./initialState";

import {postTodo} from "../../../redux/todo/operations-todo";
import {postTodoPoint} from "../../../redux/todo/endpoints-todo";

import s from "./CreateTodoForm.module.scss"

function CreateTodoForm(props) {
    const dispatch = useDispatch()

    const onSubmit = useCallback((data) => {
        dispatch(postTodo(postTodoPoint, data))
    }, [dispatch])

    const [data, handleChange, handleSubmit] = useForm(state, onSubmit)

    return (
        <form className={s.form}>
            <input className={s.input_title} onChange={handleChange} placeholder={"Title"} name={"title"}/>
            <button onClick={handleSubmit}>Add</button>
        </form>
    );
}

export default CreateTodoForm;