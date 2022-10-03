import logo from '../../images/logo.svg';
import { Route, Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import profileLogo from '../../images/profile-logo.svg';

function Header({ loggedIn }) {
  
  return (
    <header className={ `header ${ !loggedIn && "header_type_promo" }` }>
      <img src={ logo } alt="логотип зеленая звезда" className="header__logo" />
      <Route>
        <div className={ `header__link-container ${ loggedIn && "header__link-container_hide" }` }>
          <Link to="#" className="header__link">
            Регистрация
          </Link>
          <Link to="#" >
            <button className="header__button" aria-label="кнопка войти">
              Войти
            </button>
          </Link>
        </div>        
       {loggedIn && <Navigation /> }
       <Link to="#" className={ `header__profile-link ${ !loggedIn && "header__profile-link_hide" }` }>
          <button className="header__profile-button" aria-label="кнопка аккаунт">
            <img src={ profileLogo } alt="логотип человечка" className="header__profile-button-logo" />
            Аккаунт
          </button>
        </Link>
      </Route>
    </header>
  )
};

export default Header;