import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie, onSaveMovie, isSaved, onDeleteMovie }) {
  const location = useLocation();

  const duration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    if (hours) {
      return `${hours}ч ${minutes}м`
    }
    return `${minutes}м`
  }

  function handleSaveMovie() {    
    onSaveMovie(movie);
  }

  function handleDeleteMovie() {
    onDeleteMovie(movie);
  }

  return (
    <div className="movies-card">
      <a 
        className="movies-card__link"
        target="_blank"
        rel="noreferrer"
        href={movie.trailerLink}
      >
        <img 
          className="movies-card__poster" 
          alt="постер к фильму"
          src={movie.image}
          title={movie.description}
        />
      </a>
      <div className="movies-card__description">
        <h2 className="movies-card__name">{movie.nameRU}</h2>
        <span className="movies-card__duration">{duration(movie.duration)}</span>
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