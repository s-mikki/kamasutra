import React from "react";
import classes from './Profile.module.css'
import Post from "../../ordinary/post/Post";
import Data from "../../ordinary/data/data";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.profile}>
                <a className={classes.profile__link} href="#">
                    <img className={classes.profile__img} src="https://news.store.rambler.ru/img/23d7753f6afb1e3cfcb36eb4f6a60746?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen" alt=""/>
                </a>
                <div className={classes.profile__content}>
                    <img className={classes.profile__person} width="100" height="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27D1JcNRraSeq0Q52KxMA0QNx5nQhzxPNaQ&s" alt="Профиль"/>
                    <div className={classes.profile__data}>
                        <h2 className={classes.profile__name}>Dmitry K</h2>
                        <Data/>
                    </div>
                </div>
                <div className={classes.profile__block}>
                    <h2 className={classes.profile__title}>My posts</h2>
                    <textarea className={classes.profile__textarea}></textarea>
                    <button className={classes.profile__button}></button>
                </div>
                <Post/>
            </div>
        </div>
    )
}

export default Profile;