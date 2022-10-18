import { Route, NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

  return(
    <nav className="navigation">
      <Route>
        <div className="navigation__links-container">
          <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">
            Сохранённые фильмы
          </NavLink>
        </div>        
      </Route>
    </nav>   
  )  
}

export default Navigation;