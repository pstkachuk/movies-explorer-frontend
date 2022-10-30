import './NavTab.css';
import { Route } from 'react-router-dom';

function NavTab() {
  return (
    <section className="navtab">
      <Route>
        <nav className="navtab__links">
          <a href="#about-project" className="navtab__link">О проекте</a>
          <a href="#tech" className="navtab__link">Технологии</a>
          <a href="#about-me" className="navtab__link">Студент</a>          
        </nav>
      </Route>
    </section>
  )  
}

export default NavTab;