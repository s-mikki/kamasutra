import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="">profile</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/Dialogs">Messages</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/news">News</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/rating">Rating</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/music">Music</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;