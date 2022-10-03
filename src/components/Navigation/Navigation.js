import { Route, Link } from 'react-router-dom';
import './Navigation.css';
// import profileLogo from '../../images/profile-logo.svg';

function Navigation() {

  return(
    <nav className="navigation">
      <Route>
        <div className="navigation__links-container">
          <Link to="#" className="navigation__link navigation__link_active">
            Фильмы
          </Link>
          <Link to="#" className="navigation__link">
            Сохранённые фильмы
          </Link>
        </div>
        {/* <Link to="#">
          <button className="navigation__profile-button" aria-label="кнопка аккаунт">
            <img src={ profileLogo } alt="логотип человечка" className="navigation__profile-button-logo" />
            Аккаунт
          </button>
        </Link> */}
      </Route>
    </nav>
    
   
  )  
}

export default Navigation;