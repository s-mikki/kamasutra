 import React from "react";
import classes from "./data.module.css";
 import DataItem from "../data-item/data-item";

const Data = () => {
    return (
        <ul className={classes.data__list}>
            <DataItem name="John Doe" subtitle="Web Site:" isActive={true}/>
            <DataItem name="Jane Doe" subtitle="Another Subtitle"/>
            <DataItem name="Date of Brith:" subtitle="2 january" isActive={true} />
            <DataItem name="City:" subtitle="Minsk"/>
            <DataItem name="education:" subtitle="BSU'11"/>
            <DataItem subtitle="Web Site:" link="https://www.youtube.com/watch?v=t6rAzhi3vjQ&ab_channel=IT-KAMASUTRA" linkText="IT-Kamasutra"/>
        </ul>
    )
}

 export default Data;