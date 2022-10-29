import './MoviesCard.css';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard({ movie, onSaveMovie, isSaved, onDeleteMovie }) {
  const location = useLocation();
  // const currentUser = useContext(CurrentUserContext);  

  function handleSaveMovie() {    
    onSaveMovie(movie);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  return (
    <div className="movies-card">
      <img 
        className="movies-card__poster" 
        alt="постер к фильму"
        src={movie.image}
      />
      <div className="movies-card__description">
        <h2 className="movies-card__name">{movie.nameRU}</h2>
        <span className="movies-card__duration">{movie.duration}</span>
      </div>

      {
        location.pathname === "/movies"
        && (
          isSaved
          ?
          <button 
            className="movies-card__button movies-card__save-button_saved" 
            type="button"
            onClick={handleDeleteMovie}
          >
          </button>
          :
          <button 
            className="movies-card__button movies-card__save-button" 
            type="button"
            onClick={handleSaveMovie}
          >
            Сохранить
          </button>
        )        
      }

      {
        location.pathname === "/saved-movies"
        &&
        (
          <button 
            className="movies-card__button movies-card__delete-button" 
            type="button"
            onClick={handleDeleteMovie}
          >
          </button>
        )
      }

    </div>
  )
}

export default MoviesCard;