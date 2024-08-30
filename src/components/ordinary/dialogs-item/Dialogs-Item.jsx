import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import classes from "./Dialogs-Item.module.css";



const DialogsItem = ({ id, name, isActive }) => {
  return (
    <li className={classNames(classes.dialogs__item, { [classes.active]: isActive })}>
      <NavLink to={`/dialogs/${id}`} className={({ isActive }) => (isActive ? classes.activeLink : "")}>{name}</NavLink>
    </li>
  );
};

export default DialogsItem;