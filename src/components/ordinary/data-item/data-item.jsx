import React from "react";
import classes from "./data-item.module.css";

const DataItem = (props) => {

    return (
        <li className={`${classes.data__item} ${props.isActive ? classes.active : ''}`}>
            <p className={classes.data__title}>{props.name}</p>
            <p className={classes.data__subtitle}>{props.subtitle}</p>
            {props.link && props.linkText && (
                <a className={classes.data__subtitle} href={props.link}>
                    {props.linkText}
                </a>
            )}
        </li>
    );
}

export default DataItem;