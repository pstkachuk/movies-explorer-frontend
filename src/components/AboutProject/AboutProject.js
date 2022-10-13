import './AboutProject.css';

function AboutProject() {

  return (
    <section id="about-project" className="about-project">

      <h2 className="about-project__title">О проекте</h2>

      <div className="about-project__description">
        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p className="about-project__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className="about-project__graph">
        <div className="about-project__graph-title">1 неделя</div>
        <div className="about-project__graph-title">4 недели</div>
        <p className="about-project__graph-subtitle">Back-end</p>
        <p className="about-project__graph-subtitle">Front-end</p>
      </div>

    </section>
  )
}

export default AboutProject;