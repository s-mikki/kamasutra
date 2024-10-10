import React from "react";
import "./Modal.css";
import Dropdown from "../select/Select";


const Modal = () => {
  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <div className="progress">
            <span className="progress__step progress__step--active">1</span>
            <span className="progress__step">2</span>
          </div>
          <div className="modal__titles">
            <h2 className="modal__title">Настройка профиля</h2>
            <p className="modal__text">Выберите тип организации, которую вы представляете</p>
          </div>
          <form className="organization">
            <input className="organization__input" id="organization" type="radio" name="organization"
                   value="educational"/>
            <label className="organization__label" htmlFor="organization">Образовательная организация</label>
            <input className="organization__input" type="radio" id="sports_league" name="organization"
                   value="sports_league"/>
            <label className="organization__label" htmlFor="sports_league">Спортивная лига</label>
            <input className="organization__input" type="radio" id="public" name="organization" value="public"/>
            <label className="organization__label" htmlFor="public">Общественная организация</label>
            <input className="organization__input" type="radio" id="other" name="organization" value="other"/>
            <label className="organization__label" htmlFor="other">Другая организация</label>
          </form>
          <button className="submit">Подтвердить выбор</button>
        </div>
      </div>
      <>
        <div className="modal">
          <div className="modal__content">
            <div className="progress">
              <span className="progress__step">1</span>
              <span className="progress__step progress__step--active">2</span>
              <span className="progress__step">3</span>
              <span className="progress__step">4</span>
              <span className="progress__step">5</span>
            </div>
            <div className="modal__titles">
              <h2 className="modal__title">Настройка профиля</h2>
              <p className="modal__text">Выберите организацию</p>
            </div>
            <div className="modal__container">
              <select className="organization">
                <option className="organization__option">Выберите организацию</option>
                <option className="organization__option">Организация 1</option>
                <option className="organization__option">Организация 2</option>
                <option className="organization__option">Организация 3</option>
              </select>
              <label className="checkbox" htmlFor="check">
                <input className="checkbox__input" id="check" type="checkbox"/>
                <span className="checkbox__indicator"/>
                <span className="checkbox__text">Представляю ССК</span>
              </label>
            </div>
            <Dropdown/>
            <select className="organization">
              <option className="organization__option">Выберите ССК</option>
              <option className="organization__option">ССК 1</option>
              <option className="organization__option">ССК 2</option>
              <option className="organization__option">ССК 3</option>
            </select>
            <button className="submit submit--right">Далее</button>
          </div>
        </div>
      </>
    </>

  );
}

export default Modal;