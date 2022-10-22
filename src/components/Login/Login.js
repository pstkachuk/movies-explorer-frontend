import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import TooltipMessage from '../TooltipMessage/TooltipMessage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';

function Login({ onLogin, tooltip }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

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
      <form 
        className="login__form" 
        name="login-form"
        noValidate
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="login__label">
          <span className="login__label-text">
            E-mail
          </span>
          <input
            className={`login__input ${errors.email && "login__input_error"}`}
            name="email"
            type="email"
            placeholder="pochta@yandex.ru"
            required
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className="login__error">{errors.email || ''}</span>
        </label>

        <label htmlFor="password" className="login__label">
          <span className="login__label-text">
            Пароль
          </span>
          <input
            className={`login__input ${errors.password && "login__input_error"}`}
            name="password"
            type="password"
            required
            onChange={handleChange}
            value={values.password || ''}
          />
          <span className="login__error login__error_hide">{errors.password || ''}</span>
        </label>

        <TooltipMessage tooltip={tooltip} />

        <button
          className={ `login__submit-button ${!isValid && "login__submit-button_disabled"}` }
          aria-label="кнопка войти"
          type="submit"
          disabled={!isValid}
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