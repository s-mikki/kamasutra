import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__list}>
                <li className={classes.nav__item}>
                    <a className={classes.nav__link} href="#">profile</a>
                </li>
                <li className={classes.nav__item}>
                    <a className={classes.nav__link} href="#">Messages</a>
                </li>
                <li className={classes.nav__item}>
                    <a className={classes.nav__link} href="#">News</a>
                </li>
                <li className={classes.nav__item}>
                    <a className={classes.nav__link} href="#">Settings</a>
                </li>
                <li className={classes.nav__item}>
                    <a className={classes.nav__link} href="#">Music</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;