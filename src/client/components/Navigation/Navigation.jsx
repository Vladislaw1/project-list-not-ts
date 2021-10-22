import React from 'react';
import {Link} from "react-router-dom";

import s from "./Navigation.module.scss"

function Navigation(props) {
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                <li className={s.nav_list_item}>
                    <Link className={s.nav_list_item_link} to={"/project-list-not-ts"}>Todos</Link>
                </li>
                <li className={s.nav_list_item}>
                    <Link className={s.nav_list_item_link} to={"/create"}>Create Todo</Link>
                </li>
            </ul>


        </nav>
    );
}

export default Navigation;