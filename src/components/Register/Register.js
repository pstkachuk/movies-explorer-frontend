import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';

function Register() {
  return (
    <main className="register">
      <Link to="/">
        <img 
          className="register__logo"
          alt="логотип зеленая звезда"
          src={ logo }
        />
      </Link>
      <h1 className="register__title">Добро пожаловать!</h1>
      <form className="register__form" name="register-form">
        <label htmlFor="name" className="register__label">
          <span className="register__label-text">
            Имя
          </span>
          <input
            className="register__input"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
          />
          <span className="register__error register__error_hide">Что-то пошло не так...</span>
        </label>

        <label htmlFor="email" className="register__label">
          <span className="register__label-text">
            E-mail
          </span>
          <input
            className="register__input"
            name="email"
            type="email"
            required
          />
          <span className="register__error register__error_hide">Что-то пошло не так...</span>
        </label>

        <label htmlFor="password" className="register__label">
          <span className="register__label-text">
            Пароль
          </span>
          <input
            className="register__input register__input_error"
            name="password"
            type="password"
            required
          />
          <span className="register__error">Что-то пошло не так...</span>
        </label>

        <Error />

        <button
          className="register__submit-button "
          type="submit"
          // disabled="true"
        >
          Зарегистрироваться
        </button>
        <span className="register__text">
          Уже зарегистрированы?
          <Link className="register__link" to="/signin">Войти</Link>
        </span>

      </form>
    </main>
  )
}

export default Register;