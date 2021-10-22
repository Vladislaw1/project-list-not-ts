import React from 'react';
import {Switch,Route} from "react-router-dom";

import TodoPage from "../../page/TodoPage";
import CreateTodoPage from "../../page/CreateTodoPage";

function Routes(props) {
    return (
        <Switch>
            <Route exact path={"/"} component={TodoPage} />
            <Route exact path={"/create"} component={CreateTodoPage} />
        </Switch>
    );
}

export default Routes;