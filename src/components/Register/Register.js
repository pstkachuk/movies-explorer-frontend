import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import TooltipMessage from '../TooltipMessage/TooltipMessage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';

function Register({ onRegister, tooltip, isPreloaderOpen }) {
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <>
      { isPreloaderOpen
      ? 
      <Preloader />
      :
      (<main className="register">
        <Link to="/">
          <img 
            className="register__logo"
            alt="логотип зеленая звезда"
            src={ logo }
          />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form 
          className="register__form" 
          name="register-form"
          noValidate
          onSubmit={ handleSubmit }
        >
          <label htmlFor="name" className="register__label">
            <span className="register__label-text">
              Имя
            </span>
            <input
              className={`register__input ${errors.name && "register__input_error"}`}
              name="name"
              type="text"
              required
              minLength="2"
              maxLength="30"
              pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
              onChange={ handleChange }
              value={ values.name || '' }
            />
            <span className="register__error">{errors.name || ''}</span>
          </label>

          <label htmlFor="email" className="register__label">
            <span className="register__label-text">
              E-mail
            </span>
            <input
              className={`register__input ${errors.email && "register__input_error"}`}
              name="email"
              type="email"
              required
              onChange={handleChange}
              value={values.email || ''}
            />
            <span className="register__error">{errors.email || ''}</span>
          </label>

          <label htmlFor="password" className="register__label">
            <span className="register__label-text">
              Пароль
            </span>
            <input
              className={`register__input ${errors.password && "register__input_error"}`}
              onChange={handleChange}
              name="password"
              type="password"
              required
              value={values.password || ''}
            />
            <span className="register__error">{errors.password || ''}</span>
          </label>

          <TooltipMessage tooltip={ tooltip } />

          <button
            className={ `register__submit-button ${!isValid && "register__submit-button_disabled"}` }
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
          <span className="register__text">
            Уже зарегистрированы?
            <Link className="register__link" to="/signin">Войти</Link>
          </span>

        </form>
      </main>)}
    </>
  )
}

export default Register;