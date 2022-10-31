import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import TooltipMessage from '../TooltipMessage/TooltipMessage';
import { getFilteredMovies, getShortMovies } from '../../utils/utils';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedMovies({ isPreloaderOpen, tooltip, setTooltip, savedUserMovies, onDeleteMovie }) {
  const currentUser = useContext(CurrentUserContext);
  
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);
  const [isMoviesFound, setIsMoviesFound] = useState(false);
  const [renderedMovies, setRenderedMovies] = useState(savedUserMovies);
  const [filteredMovies, setFilteredMovies] = useState(renderedMovies);


  function handleSearch(inputValue) {
    const movies = getFilteredMovies(savedUserMovies, inputValue, isShortMoviesChecked)
    if (movies.length === 0) {
      setIsMoviesFound(true);
      setTooltip({
        isShow: true,
        message: 'Ничего не найдено'
      });
    } else {
      setIsMoviesFound(false);
      setFilteredMovies(movies);
      setRenderedMovies(movies);
    }
  }

  function handleFilterChecked() {
    if (!isShortMoviesChecked) {
      setIsShortMoviesChecked(true);
      localStorage.setItem('savedShortMovies', true);
      setRenderedMovies(getShortMovies(filteredMovies));
      if (getShortMovies(filteredMovies).length === 0) {
        setIsMoviesFound(true);
      } else {
        setIsMoviesFound(false);
      }
    } else {
      setIsShortMoviesChecked(false);
      localStorage.setItem('savedShortMovies', false);      
      if (filteredMovies.length === 0) {
        setIsMoviesFound(true);
      } else {
        setIsMoviesFound(false);
      }
      setRenderedMovies(filteredMovies);
    }
  }

  useEffect(() => {
    setTooltip({
      isShow: false,
      message: ''
    })
  }, [])

  useEffect(() => {
    if (localStorage.getItem('savedShortMovies') === 'true') {
      setIsShortMoviesChecked(true);
      setRenderedMovies(getShortMovies(savedUserMovies))
    } else {
      setIsShortMoviesChecked(false);
      setRenderedMovies(savedUserMovies)
    }
  }, [currentUser, savedUserMovies]);

  useEffect(() => {
    setFilteredMovies(savedUserMovies);
    savedUserMovies.length !== 0 ? setIsMoviesFound(false) : setIsMoviesFound(true);
  }, [savedUserMovies]);

  return (
    <>
      { 
        isPreloaderOpen
        ?
        <Preloader />
        :
        (<div className="saved-movies">
          <SearchForm
            handleSearch={handleSearch} 
            handleFilterChecked={handleFilterChecked}
            isShortMoviesChecked={isShortMoviesChecked}
          />
          {!isMoviesFound &&
            <MoviesCardList
              filteredMovies={renderedMovies}
              savedUserMovies={savedUserMovies}
              onDeleteMovie={onDeleteMovie}
            />
          }
          <TooltipMessage tooltip={tooltip} />
        </div>)
      }
    </>
  )
}

export default SavedMovies;