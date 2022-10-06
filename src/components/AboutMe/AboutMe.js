import './AboutMe.css';
import avatar from "../../images/avatar.jpg";

function AboutMe() {

  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__info-container">
        <div className="about-me__info">
          <div className="about-me__description">
            <h3 className="about-me__name">Павел</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 34 года</p>
            <p className="about-me__paragraph">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.              
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