import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/Profile">profile</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/Dialogs">Messages</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/navigation">News</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="/se">Settings</NavLink>
                </li>
                <li className={classes.nav__item}>
                    <NavLink className={({isActive}) => isActive ? `${classes.nav__link} ${classes.active}` : classes.nav__link} to="">Music</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;