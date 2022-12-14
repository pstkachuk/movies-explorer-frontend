//
//утилитарные функции для фильтрации поиска фильмов
//

import { SHORTSMOVIE_DURATION } from '../utils/const.js'

//отфилтровать по ключевому слову пользователя
function getFilteredMovies(movies, keyword) {
  const filteredMovies = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase();
    const movieEn = String(movie.nameEN).toLowerCase();
    const searchedMovie = keyword.toLowerCase();
    return movieRu.includes(searchedMovie) || movieEn.includes(searchedMovie);
  });

  return filteredMovies;
}

//отфильтровать короткометражки
function getShortMovies(movies) {
  return movies.filter((movie) => movie.duration < SHORTSMOVIE_DURATION);
}

function checkSavedMovie(movies, movie) {
  return movies.find((item) => {
    return item.movieId === movie.id;
  })
}

function fixMoviesFields(movies) {
  movies.forEach(movie => {
    if (!movie.image) {
      movie.image = movie.image.url;
      movie.thumbnail = movie.image.formats.thumbnail.url;
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
      movie.image = `https://api.nomoreparties.co${movie.image.url}`;
    }
    
  });
  return movies
}


export {
  getFilteredMovies,
  getShortMovies,
  fixMoviesFields,
  checkSavedMovie
}