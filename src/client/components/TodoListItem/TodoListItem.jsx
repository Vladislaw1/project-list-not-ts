import React, {useState} from 'react';

import {useDispatch} from "react-redux";
import {deleteAllTodoPoint, patchTodoPoint} from "../../../redux/todo/endpoints-todo";
import {deleteTodo, patchTodo} from "../../../redux/todo/operations-todo";

import style from "./TodoListItem.module.scss"

function TodoListItem({todo}) {
    const dispatch = useDispatch()

    const [completed, setCompleted] = useState(todo.completed);

    const deleteTod = (id) => dispatch(deleteTodo(deleteAllTodoPoint, id));

    const handleChange = (e) => {
        setCompleted(e.target.checked)
        dispatch(patchTodo(patchTodoPoint, todo.id, e.target.checked))
    }

    return (
        <li className={style.todo_list_item}>
            <h3 className={style.todo_list_item_caption}>{todo.title}</h3>
            <div className={style.control_block}>
                <label>
                    Task completed:
                    <input type={"checkbox"} value={completed} checked={completed} onChange={(e) => handleChange(e)}/>
                </label>
                <button onClick={() => deleteTod(todo.id)}>Delete</button>
            </div>
        </li>
    );
}

export default TodoListItem;