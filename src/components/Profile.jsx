import React from "react";

const Profile = () => {
    return (
        <div className="content">
            <div className="profile">
                <a className="profile__link" href="#">
                    <img
                        src="https://news.store.rambler.ru/img/23d7753f6afb1e3cfcb36eb4f6a60746?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen"
                        alt=""/>
                </a>
                <div className="data__content">
                    <img className="data__person" width="100" height="100"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS27D1JcNRraSeq0Q52KxMA0QNx5nQhzxPNaQ&s"
                         alt="Профиль"/>
                    <div className="data__data">
                        <h2 className="data__name">Dmitry K</h2>
                        <ul className="data__list">
                            <li className="data__item">
                                <p className="data__title">Date of Brith:</p>
                                <p className="data__subtitle">2 january</p>
                            </li>
                            <li className="data__item">
                                <p className="data__title">City:</p>
                                <p className="data__subtitle">Minsk</p>
                            </li>
                            <li className="data__item">
                                <p className="data__title">education:</p>
                                <p className="data__subtitle">BSU'11</p>
                            </li>
                            <li className="data__item">
                                <p className="data__title">Web Site:</p>
                                <a className="data__subtitle"
                                   href="https://www.youtube.com/watch?v=t6rAzhi3vjQ&ab_channel=IT-KAMASUTRA">https://www.youtube.com/watch?v=t6rAzhi3vjQ&ab_channel=IT-KAMASUTRA</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile__block">
                    <h2 className="profile__title">My posts</h2>
                    <textarea className="profile__textarea"></textarea>
                    <button className="profile__button"></button>
                </div>
                <ul className="comment">
                    <li className="comment__item">
                        <div className="circle"></div>
                        <p className="comment__text"></p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Profile;