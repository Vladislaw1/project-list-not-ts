import React, {useEffect, useState} from 'react';
import Header from "../shared/components/Header";
import {getAllTask, getNextPageTask} from "../redux/todo/operations-todo";
import {useDispatch} from "react-redux";
import {getAllTodoPoint} from "../redux/todo/endpoints-todo";

import TodoList from "../client/components/TodoList";

import s from "./TodoPage.module.scss"

function TodoPage(props) {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getAllTask(getAllTodoPoint, page))
    }, [dispatch, page])

    const nextPage = () => setPage(prevState => prevState + 1)
    const prevPage = () => setPage(prevState => prevState - 1)

    const disableBtn = page === 1
    const classBtn = disableBtn ? `${s.btn_showmore} ${s.btn_showmore_disable}` : `${s.btn_showmore}`

    return (
        <div>
            <Header/>
            <TodoList/>
            <div className={s.btn_showmore_div}>
                <button className={classBtn} disabled={disableBtn} onClick={prevPage}>Prev page</button>
                <button className={s.btn_showmore} onClick={nextPage}>Next page</button>
            </div>
        </div>
    );
}

export default TodoPage;