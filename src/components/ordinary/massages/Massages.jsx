import React from "react";
import classes from "./Massages.module.css";
import MassagesItem from "../massages-item/Massages-Item";


let massagesData = [
  {id: 1, massage: "Hi"},
  {id: 2, massage: "How is your"},
  {id: 3, massage: "Yo"},
  {id: 4, massage: "Dialog 4"},
  {id: 5, massage: "Dialog 5"},
  {id: 6, massage: "Dialog 6"},
]


const Massages = () => {
  return (
    <ul className={classes.massages}>
      <MassagesItem massage={massagesData[0].massage}/>
      <MassagesItem massage={massagesData[1].massage}/>
    </ul>
  )
}

export default Massages;