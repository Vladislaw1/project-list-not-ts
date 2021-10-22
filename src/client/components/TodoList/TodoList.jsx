import React from 'react';
import {useSelector} from "react-redux";
import {allTodo, isLoading} from "../../../redux/todo/selectors-todo";

import TodoListItem from "../TodoListItem";

import style from "./TodoList.module.scss"

function TodoList() {
    const todos = useSelector(allTodo)
    const loading = useSelector(isLoading)

    return (
        <ul className={style.todo_list}>
            {loading && <p>Loading...</p>}
            {todos && todos.map(el => <TodoListItem key={el.id} todo={el}/>)}
        </ul>
    );
}

export default TodoList;