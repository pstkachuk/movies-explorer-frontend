import './Movies.css';
import moviesApi from '../../utils/MoviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import TooltipMessage from '../TooltipMessage/TooltipMessage';
import { getFilteredMovies, getShortMovies } from '../../utils/utils';
import { fixMoviesFields } from '../../utils/utils.js';

function Movies({ setTooltip, setIsPreloaderOpen, isPreloaderOpen, tooltip, onDeleteMovie, savedUserMovies, onSaveMovie }) {
  const currentUser = useContext(CurrentUserContext);

  const [allMovies, setAllMovies] = useState([]); //все фильмы с сервиса
  const [isMoviesFound, setIsMoviesFound] = useState(false); //фильмы не найдены
  const [initialMovies, setInitialMovies] = useState([]); //фильмы, найденые по запросу
  const [filteredMovies, setFilteredMovies] = useState([]); //отфильтрованые фильмы
  const [isShortMoviesChecked, setIsShortMoviesChecked] = useState(false);  

  function handleFilterChecked() {
    setIsShortMoviesChecked(!isShortMoviesChecked);
    if (!isShortMoviesChecked) {
      setFilteredMovies(getShortMovies(initialMovies))
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shortMovies', !isShortMoviesChecked)
  }

  //поиск фильмов
  function handleSearch(inputValue) {
    setTooltip({
      isShow: false,
      message: ''
    })

    localStorage.setItem('inputValue', inputValue);
    localStorage.setItem('shortMovies', isShortMoviesChecked);

    if (allMovies.length === 0) {
      setIsPreloaderOpen(true);
      moviesApi.getMovies()
      .then((data) => {
        setAllMovies(data);
        searchFilteredMovies(fixMoviesFields(data), inputValue, isShortMoviesChecked);
      })
      .catch(() => {
        setTooltip({
          isShow: true,
          message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        })
      })
      .finally(() => setIsPreloaderOpen(false));
    } else {
      searchFilteredMovies(allMovies, inputValue, isShortMoviesChecked);
    }
  }

  //фильтрация по ключевому слову
  function searchFilteredMovies(movies, keyword, isShortMovie) {
    const filteredSearchedMovies = getFilteredMovies(movies, keyword);
    if (filteredSearchedMovies.length === 0) {
      setTooltip({
        isShow: true,
        message: 'Ничего не найдено'
      });
      setIsMoviesFound(true);
    } else {
      setIsMoviesFound(false);
    }
    setInitialMovies(filteredSearchedMovies);
    setFilteredMovies(isShortMovie ? getShortMovies(filteredSearchedMovies) : filteredSearchedMovies);
    localStorage.setItem('movies', JSON.stringify(filteredSearchedMovies));
  }

  //отображение найденых фильмов с учётом фильтра поиска
  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'))
      setInitialMovies(movies);

      if (localStorage.getItem('shortMovies') === 'true') {
        setIsShortMoviesChecked(true);
        setFilteredMovies(getShortMovies(movies))
      } else {
        setIsShortMoviesChecked(false);
        setFilteredMovies(movies)
      }
    }    
  }, [currentUser]);

  //сброс ошибки
  useEffect(() => {
    setTooltip({
      isShow: false,
      message: ''
    })
  }, [])

  //все фильмы, полученные с сервиса, сохраняются в localstorage для того, чтобы запрос к сервису осуществлялся только единожды при первом поиске
  useEffect(() => {
    if (allMovies.length === 0 && localStorage.getItem('allMovies')) {
      setAllMovies(JSON.parse(localStorage.getItem('allMovies')));
    }
  }, [currentUser, allMovies]);

  useEffect(() => {
    if (allMovies.length > 0 && !(localStorage.getItem('allMovies'))) {
      localStorage.setItem('allMovies', JSON.stringify(allMovies));
    }
  }, [allMovies]);
 

  return (
    <>
      {
      isPreloaderOpen
      ?
      <Preloader />
      :
      (
        <div className="movies">
          <SearchForm 
            handleSearch={handleSearch} 
            handleFilterChecked={handleFilterChecked}
            isShortMoviesChecked={isShortMoviesChecked}
          />
          {!isMoviesFound && (
            <MoviesCardList 
              filteredMovies={filteredMovies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedUserMovies={savedUserMovies}
            />
          )}      
          <TooltipMessage tooltip={tooltip}/>
        </div>
      )
      }
    </>
  )
}

export default Movies;