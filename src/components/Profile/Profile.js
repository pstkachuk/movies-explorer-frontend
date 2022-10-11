import './Profile.css';

function Profile() {

  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <label className="profile__label">
          <span className="profile__text">Имя</span>
          <input className="profile__input" placeholder="Виталий"></input>
        </label>
        <label className="profile__label">
          <span className="profile__text">E-mail</span>
          <input className="profile__input" placeholder="pochta@yandex.ru"></input>
        </label>        
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button-logout">Выйти из аккаунта</button>
      </form>
    </div>
  )
}

export default Profile;