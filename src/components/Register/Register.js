import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

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
        <label for="name" className="register__label">
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
          <span className="register__error ">Что-то пошло не так...</span>
        </label>

        <label for="email" className="register__label">
          <span className="register__label-text">
            E-mail
          </span>
          <input
            className="register__input"
            name="email"
            type="email"
            required
          />
          <span className="register__error ">Что-то пошло не так...</span>
        </label>

        <label for="password" className="register__label">
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