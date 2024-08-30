import React from "react";
import classes from "./Dialogs-List.module.css";
import DialogsItem from "../dialogs-item/Dialogs-Item";

let dialogsData = [
  {id: 1, Name: "Dialog 1"},
  {id: 2, Name: "Dialog 2"},
  {id: 3, Name: "Dialog 3"},
  {id: 4, Name: "Dialog 4"},
  {id: 5, Name: "Dialog 5"},
  {id: 6, Name: "Dialog 6"},
]

let dialogsElements = [
  <DialogsItem name={dialogsData[0].Name} id={dialogsData[0].id}/>,
  <DialogsItem name={dialogsData[1].Name} id={dialogsData[2].id}/>
]

const DialogsList = () => {
  return (
    <ul className={classes.dialogs__list}>
      {dialogsElements.map((dialogsElement) => (
        <div>

        </div>
      )) }
    </ul>
  )
}

export default DialogsList;