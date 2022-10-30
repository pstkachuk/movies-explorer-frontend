import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkSavedMovie } from '../../utils/utils.js';

function MoviesCardList({ onSaveMovie, filteredMovies, onDeleteMovie, savedUserMovies }) {
  const [screenWidth, setScreenWidth] = useState(1280);
  const [maxMoviesToShow, setMaxMoviesToShow] = useState(12);
  const [moviesToShow, setMoviesToShow] = useState([]);

  const location = useLocation();

  useEffect(() => {
    setNewMoviesCount();
  }, [maxMoviesToShow, setNewMoviesCount])

  useEffect(() => {
    window.addEventListener('resize', function() {
      setTimeout(setScreenWidth(window.innerWidth), 1000);
    });
    return () => {
      window.removeEventListener('resize', function() {
        setTimeout(setScreenWidth(window.innerWidth), 1000);
      });
    }
  })

  useEffect(() => {
    setScreenWidth(window.innerWidth);    
    if (location.pathname === '/saved-movies') {
      setMaxMoviesToShow(999);
    } else {
      if (screenWidth < 767) {
        setMoviesCount(5);
      } else if (screenWidth < 1024) {
        setMoviesCount(8);      
      } else {
        setMoviesCount(12); 
      }
    }
  }, [filteredMovies, screenWidth]);

  function setMoviesCount(count) {
    setMaxMoviesToShow(count);
    let movies = [];
    filteredMovies.forEach((item, i) => {
      if (i < count) {
        movies.push(item);
      }
    })
    setMoviesToShow(movies);
  }

  function setNewMoviesCount() {
    let movies = [];
    filteredMovies.forEach((item, i) => {
      if (i < maxMoviesToShow) {
        movies.push(item);
      }
    })
    setMoviesToShow(movies);
  }

  function handleAddMoreMovies() {
    if (screenWidth >= 1280 ) {
      setMaxMoviesToShow(maxMoviesToShow + 3);
    } else if (screenWidth < 1280) {
      setMaxMoviesToShow(maxMoviesToShow + 2);
    }
  }
 
  return (
    <section className="movies-cards-list">
      <div className="movies-cards-list__cards">
       {
        moviesToShow.map((movie) => (
          <MoviesCard 
            key={movie.id}
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
        location.pathname === "/movies" && filteredMovies.length !== moviesToShow.length && (
          <button 
            className="movies-cards-list__more-movies-button" 
            type="button"
            onClick={handleAddMoreMovies}
          >
            Ещё
          </button>          
        )
        
      }
    </section>
  )
}

export default MoviesCardList;