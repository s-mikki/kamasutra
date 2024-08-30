import React from "react";
import classes from "./Dialogs.module.css";
import Massages from "../../ordinary/massages/Massages";
import DialogsList from "../../ordinary/dialogs-list/Dialogs-List";

const Dialogs = () => {
    return(
        <div className={classes.dialogs}>
          <DialogsList/>
          <Massages/>
        </div>
    )
}

export default Dialogs;