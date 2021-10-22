import React from 'react';
import Navigation from "../../../client/components/Navigation";

import s from "./Header.module.scss"

function Header(props) {
    return (
            <header className={s.header}>
                <Navigation/>
            </header>
    );
}

export default Header;