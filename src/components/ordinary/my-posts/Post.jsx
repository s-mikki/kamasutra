import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return (
        <ul className={classes.comment}>
            <li className={classes.comment__item}>
                <div className={classes.circle}>fdsafasdfsa</div>
                <p className={classes.comment__text}>afsdsf</p>
            </li>
        </ul>
    )
}

export default Post;