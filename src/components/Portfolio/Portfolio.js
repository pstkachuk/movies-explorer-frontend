import './Portfolio.css';
import linkImage from '../../images/portfolio-link.svg';

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <a 
          className="portfolio__link"
          href="https://pstkachuk.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="portfolio__list-item">
            Статичный сайт
          </li>
          <img
            src={ linkImage }
            alt="логотип стрелка"
            className="portfolio__link-image"
          />
        </a>
        <a
          className="portfolio__link"
          href="https://pstkachuk.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="portfolio__list-item">
            Адаптивный сайт
          </li>
          <img
            src={ linkImage }
            alt="логотип стрелка"
            className="portfolio__link-image"
          />
        </a>
        <a
          className="portfolio__link"
          href="https://sfd.nomorepartiesxyz.ru/"
          target="_blank"
          rel="noreferrer"
        >
          <li className="portfolio__list-item">
            Одностраничное приложение
          </li>
          <img
            src={ linkImage }
            alt="логотип стрелка"
            className="portfolio__link-image"
          />
        </a>
      </ul>
    </section>
  )
}

export default Portfolio;