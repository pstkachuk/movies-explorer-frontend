import './Profile.css';
import Error from '../Error/Error';

function Profile() {

  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__label">
          <span className="profile__text">Имя</span>
          <input 
            className="profile__input" 
            placeholder="Виталий"
            type="text"
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            required
          />
        </label>
        <label className="profile__label">
          <span className="profile__text">E-mail</span>
          <input 
            className="profile__input" 
            placeholder="pochta@yandex.ru"
            ttype="email"
            required
          />
        </label>
        <Error />      
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button-logout">Выйти из аккаунта</button>
      </form>
    </div>
  )
}

export default Profile;