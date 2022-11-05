import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkSavedMovie } from '../../utils/utils.js';
import { SCREEN_CONFIG } from '../../utils/const.js';

function MoviesCardList({ onSaveMovie, filteredMovies, onDeleteMovie, savedUserMovies }) {
  const [screenWidth, setScreenWidth] = useState(1280);
  const [maxMoviesToShow, setMaxMoviesToShow] = useState(12);
  const [moviesToShow, setMoviesToShow] = useState([]);

  const { wide, medium, narrow} = SCREEN_CONFIG;

  const location = useLocation();

  useEffect(() => {
    setNewMoviesCount();
  }, [maxMoviesToShow, setNewMoviesCount])

  useEffect(() => {
    window.addEventListener('resize', function() {
      setTimeout(setScreenWidth(window.innerWidth), 500);
    });
    return () => {
      window.removeEventListener('resize', function() {
        setTimeout(setScreenWidth(window.innerWidth), 500);
      });
    }
  })

  useEffect(() => {
    setScreenWidth(window.innerWidth);    
    if (location.pathname === '/saved-movies') {
      setMaxMoviesToShow(999);
    } else {
      if (screenWidth < narrow.screenWidth) {
        setMoviesCount(narrow.cardsCount.atFirst);
      } else if (screenWidth < medium.screenWidth) {
        setMoviesCount(medium.cardsCount.atFirst);      
      } else {
        setMoviesCount(wide.cardsCount.atFirst); 
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
    if (screenWidth >= wide.screenWidth ) {
      setMaxMoviesToShow(maxMoviesToShow + wide.cardsCount.more);
    } else if (screenWidth < wide.screenWidth) {
      setMaxMoviesToShow(maxMoviesToShow + medium.cardsCount.more);
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