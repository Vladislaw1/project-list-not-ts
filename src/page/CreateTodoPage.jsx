import React from 'react';
import Header from "../shared/components/Header";
import CreateTodoForm from "../client/components/CreateTodoForm";

import s from "./CreateTodoPage.module.scss"

function CreateTodoPage(props) {
    return (
        <div>
            <Header/>
            <div className={s.form_add}>
                <CreateTodoForm/>
            </div>
        </div>
    );
}

export default CreateTodoPage;