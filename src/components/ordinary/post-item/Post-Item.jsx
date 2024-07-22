import React from "react";
import classes from './Post-Item.module.css'

const PostItem = (post) => {
    return (
        <li className={classes.comment__item}>
            <img className={classes.comment__img} width={50} height={50} src="https://i.pinimg.com/originals/f3/1c/7e/f31c7e9a6c5851ad9d2722d535034855.jpg" alt="Фото профиля"/>
            <div className={classes.comment__container}></div>
            <h3 className={classes.comment__name}>{post.name}</h3>
            <p className={classes.comment__text}>{post.text}</p>
        </li>
    )
}

export default PostItem;