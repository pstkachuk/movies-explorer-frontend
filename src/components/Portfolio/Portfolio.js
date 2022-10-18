import './Portfolio.css';
import linkImage from '../../images/portfolio-link.svg';

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-container">
          <a 
            className="portfolio__link"
            href="https://pstkachuk.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__list-item">
              Статичный сайт
            </div>
            <img
              src={ linkImage }
              alt="логотип стрелка"
              className="portfolio__link-image"
            />
          </a>
        </li>

        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://pstkachuk.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__list-item">
              Адаптивный сайт
            </div>
            <img
              src={ linkImage }
              alt="логотип стрелка"
              className="portfolio__link-image"
            />
          </a>
        </li>

        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://sfd.nomorepartiesxyz.ru/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="portfolio__list-item">
              Одностраничное приложение
            </div>
            <img
              src={ linkImage }
              alt="логотип стрелка"
              className="portfolio__link-image"
            />
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;