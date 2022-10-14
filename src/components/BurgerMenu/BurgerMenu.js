import './BurgerMenu.css';
import Navigation from '../Navigation/Navigation';
import profileLogo from '../../images/profile-logo.svg';
import { Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function BurgerMenu({ loggedIn }) {
  const location = useLocation();

  return (

    loggedIn &&
    (
      <div className="burger-menu">

        <input id="burger-menu__toggle" type="checkbox" />
        <label className="burger-menu__button" htmlFor="burger-menu__toggle">
          <span></span>
        </label>

        <div className="burger-menu__menu">
          <Route>
            <div className="burger-menu__links">
              <Link to="/" className={ `burger-menu__link ${location.pathname === "/" && "burger-menu__link_active"}` }>Главная</Link>
              <Navigation />
            </div>
            <Link to="/profile" className="burger-menu__profile-link">
              <button className="burger-menu__profile-button" aria-label="кнопка аккаунт">
                <img src={ profileLogo } alt="логотип человечка" className="burger-menu__profile-button-logo" />
                Аккаунт
              </button>
            </Link>
          </Route>
        </div>

      </div>
    )
  
  );
}

export default BurgerMenu;