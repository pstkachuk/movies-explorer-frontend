import './MoviesCard.css';
import moviePoster from '../../images/poster.jpg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation();

  return (
    <div className="movies-card">
      <img 
        className="movies-card__poster" 
        alt="постер к фильму"
        src={ moviePoster }
      />
      <div className="movies-card__description">
        <h2 className="movies-card__name">Gimme Danger: История Игги и The Stooges</h2>
        <span className="movies-card__duration">1ч 17м</span>
      </div>
      { 
        isSaved 
        ? 
        <button className="movies-card__button movies-card__save-button_saved"></button> 
        : 
        <button className="movies-card__button movies-card__save-button">Сохранить</button>
      }      
      <button className={ `movies-card__button ${ location.pathname === '/saved-movies' && "movies-card__delete-button_saved" }` } ></button>
    </div>
  )
}

export default MoviesCard;