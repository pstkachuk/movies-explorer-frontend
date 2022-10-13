import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';

function Login() {
  return (
    <main className="login">
      <Link to="/">
        <img 
          className="login__logo"
          alt="логотип зеленая звезда"
          src={ logo }
        />
      </Link>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form" name="login-form">
        <label for="email" className="login__label">
          <span className="login__label-text">
            E-mail
          </span>
          <input
            className="login__input"
            name="email"
            type="email"
            required
          />
          <span className="login__error login__error_hide">Что-то пошло не так...</span>
        </label>

        <label for="password" className="login__label">
          <span className="login__label-text">
            Пароль
          </span>
          <input
            className="login__input login__input_error"
            name="password"
            type="password"
            required
          />
          <span className="login__error login__error_hide">Что-то пошло не так...</span>
        </label>

        <Error />

        <button
          className="login__submit-button "
          type="submit"
          // disabled="true"
        >
          Войти
        </button>
        <span className="login__text">
          Ещё не зарегистрированы?
          <Link className="login__link" to="/signup">Регистрация</Link>
        </span>

      </form>
    </main>
  )
}

export default Login;