import React from "react";
import classes from "./Massages-Item.module.css";

const MassagesItem = ({massage}) => {
  return (
    <li className={classes.massages__item}>{massage}</li>
  )
}

export default MassagesItem;