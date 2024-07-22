import React from "react";
import classes from './Post.module.css'
import PostItem from "../post-item/Post-Item";

const Post = () => {
    return (
        <ul className={classes.comment}>
            <PostItem name={"Мирлан"}/>
            <PostItem text={"Привет, как дела?"}/>
        </ul>
    )
}

export default Post;