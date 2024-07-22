import React from "react";
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div className={classes.profile}>
                <a className={classes.profile__link} href="#">
                    <img
                        src="https://news.store.rambler.ru/img/23d7753f6afb1e3cfcb36eb4f6a60746?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen"
                        alt=""/>
                </a>
                <div className={classes.data__content}>
                    <img className={classes.data__person} width="100" height="100"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27D1JcNRraSeq0Q52KxMA0QNx5nQhzxPNaQ&s"
                         alt="Профиль"/>
                    <div className={classes.data__data}>
                        <h2 className={classes.data__name}>Dmitry K</h2>
                        <ul className={classes.data__list}>
                            <li className={`${classes.data__item} ${classes.active}`}>
                                <p className={classes.data__title}>Date of Brith:</p>
                                <p className={classes.data__subtitle}>2 january</p>
                            </li>
                            <li className={classes.data__item}>
                                <p className={classes.data__title}>City:</p>
                                <p className={classes.data__subtitle}>Minsk</p>
                            </li>
                            <li className={classes.data__item}>
                                <p className={classes.data__title}>education:</p>
                                <p className={classes.data__subtitle}>BSU'11</p>
                            </li>
                            <li className={classes.data__item}>
                                <p className={classes.data__title}>Web Site:</p>
                                <a className={classes.data__subtitle}
                                   href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&ab_channel=IT-KAMASUTRA">https://www.youtube.com/watch?v=t6rAzhi3vjQ&ab_channel=IT-KAMASUTRA</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.profile__block}>
                    <h2 className={classes.profile__title}>My posts</h2>
                    <textarea className={classes.profile__textarea}></textarea>
                    <button className={classes.profile__button}></button>
                </div>
                <ul className={classes.comment}>
                    <li className={classes.comment__item}>
                        <div className={classes.circle}></div>
                        <p className={classes.comment__text}></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;