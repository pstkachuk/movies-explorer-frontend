import './Promo.css';
import promoImage from '../../images/promo-img.svg'

function Promo() {

  return(
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <img className="promo__image" alt="фоновое изображение" src={ promoImage } />
    </section>
  )
}

export default Promo;