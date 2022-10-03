import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__navigation-container">
        <p className="footer__copyright">&#169; 2022. Павел Ткачук</p>
        <nav className="footer__navigation">
          <a href="https://practicum.yandex.ru" className="footer__link">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/pstkachuk" className="footer__link">
            Github
          </a>
        </nav>
      </div>
      
    </footer>
  )
}

export default Footer;