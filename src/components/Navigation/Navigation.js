import { Route, Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {

  return(
    <nav className="navigation">
      <Route>
        <div className="navigation__links-container">
          <Link to="/movies" className="navigation__link navigation__link_active">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </Link>
        </div>        
      </Route>
    </nav>   
  )  
}

export default Navigation;