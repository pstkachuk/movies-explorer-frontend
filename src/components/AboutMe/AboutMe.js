import './AboutMe.css';
import avatar from "../../images/avatar.jpg";

function AboutMe() {

  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Павел</h3>
            <p className="about-me__subtitle">Будущий фронтенд-разработчик, 34 года</p>
            <p className="about-me__paragraph">
              Я живу в Воронеже, закончил Сахалинский Государственный Колледж Бизнеса и Информатики по специальности Програмное обеспечение вычислительной техники и автоматизированных систем.
              В 2022 году окончил онлайн-курс Яндекс.Практикума "Вэб-разработчик". Стремлюсь к совершенствованию навыков фронтенд-разработки.             
            </p>
          </div>
          <a 
            className="about-me__link" 
            href="https://github.com/pstkachuk" 
            target="_blank" 
            rel="noreferrer"
            >
              Github
          </a>
        </div>
        <img
          className="about-me__image" 
          alt="фотография"
          src={ avatar }
        />
      </div>
    </section>
  )
}

export default AboutMe;