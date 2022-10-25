import './Profile.css';
import TooltipMessage from '../TooltipMessage/TooltipMessage';
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ onUpdateUser, tooltip, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, resetForm, errors, isValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  }
  
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm])
  
  //введенные данные должны отличаться от первоначальных, иначе форма не активна
  const dataIsOther = !(currentUser.name === values.name && currentUser.email === values.email);

  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form 
        className="profile__form" 
        name="profile-form"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="profile__label">
          <span className="profile__text">Имя</span>
          <input 
            className={`profile__input ${errors.name && "profile__input_error"}`}
            name="name"
            type="text"
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            required
            onChange={ handleChange }
            value={ values.name || '' }
          />
        </label>
        <span className="profile__error">{errors.name || ''}</span>

        <label className="profile__label">
          <span className="profile__text">E-mail</span>
          <input 
            className={`profile__input ${errors.email && "profile__input_error"}`}
            name="email"
            type="email"
            required
            onChange={ handleChange }
            value={ values.email || '' }
          />
        </label>
          <span className="profile__error">{errors.email || ''}</span>

        <TooltipMessage tooltip={tooltip} />      

        <button
          className={ `profile__button ${(!isValid || !dataIsOther) && "profile__submit-button_disabled"}` } 
          type="submit"
          disabled={!dataIsOther}
        >
          Редактировать
        </button>
        <button 
          className="profile__button profile__button-logout" 
          type="button"
          onClick={onSignOut}
        >
          Выйти из аккаунта
        </button>
      </form>
    </div>
  )
}

export default Profile;