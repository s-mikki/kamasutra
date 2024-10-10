import React from "react";
import classes from './Rating.module.css';

const Rating = () => {
    return(
        <div className={classes.rating}>
          <h2 className={classes.rating__title}>Рейтинг спортсменов</h2>
          <ul className={classes.rating__list}>
            {Array.from({ length: 10 }).map((_, index) => (
              <li className={classes.rating__item} key={index}>
                <div className={classes.rating__content}>
                  <img className={classes.rating__img} src="/public/img/profile-2-1x1.jpeg" width="100" height="100" alt="Фото профиля"/>
                  <div className={classes.rating__texts}>
                    <p className={classes.rating__number}>{index + 1}</p>
                    <p className={classes.rating__name}>Алексей Длинное название {index + 1}</p>
                  </div>
                </div>
                <div className={classes.rating__container}>
                  <p className={classes.rating__text}>Рейтинг</p>
                  <p className={classes.rating__score}>999</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default Rating;