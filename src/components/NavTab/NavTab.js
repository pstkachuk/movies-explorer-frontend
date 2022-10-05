import './NavTab.css';
import { Route, Link } from 'react-router-dom';

function NavTab() {
  return (
    <section className="navtab">
      <Route>
        <nav className="navtab__links">
          <Link to="#" className="navtab__link">О проекте</Link>
          <Link to="#" className="navtab__link">Технологии</Link>
          <Link to="#" className="navtab__link">Студент</Link>          
        </nav>
      </Route>
    </section>
  )  
}

export default NavTab;