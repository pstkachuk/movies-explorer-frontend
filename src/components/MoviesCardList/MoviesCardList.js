import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { checkSavedMovie } from '../../utils/utils.js';

function MoviesCardList({ onSaveMovie, filteredMovies, onDeleteMovie, savedUserMovies }) {
  const location = useLocation();
  

  return (
    <section className="movies-cards-list">
      <div className="movies-cards-list__cards">
       {
        filteredMovies.map((movie) => (
          <MoviesCard 
            key={movie._id}
            movie={movie}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            isSaved={checkSavedMovie(savedUserMovies, movie)}
          />
        )
        )
       }
      </div>
      {
        location.pathname === "/movies" && filteredMovies.length >= 5 && (
          <button 
            className="movies-cards-list__more-movies-button" 
            type="button"
          >
            Ещё
          </button>          
        )
        
      }
    </section>
  )
}

export default MoviesCardList;