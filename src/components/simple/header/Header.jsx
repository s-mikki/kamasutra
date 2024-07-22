import React from "react";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header__img} width="500" height="500" src="https://logos-world.net/wp-content/uploads/2020/05/Huawei-Logo.jpg" alt=""/>
        </header>
    )
}

export default Header;