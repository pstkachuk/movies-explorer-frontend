import logo from '../../images/logo.svg';
import { Route, Link } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className="header">
      <img src={ logo } alt="логотип зеленая звезда" className="header__logo" />
      <Route>
        <Link to="#" className="header__link">
          Регистрация
        </Link>
        <Link to="#" className="header__link header__link_type_login">
          Войти
        </Link>
      </Route>      
    </header>
  )
};

export default Header;