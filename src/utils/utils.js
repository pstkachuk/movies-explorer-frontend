//
//утилитарные функции для фильтрации поиска фильмов
//

//отфилтровать по ключевому слову пользователя
function getFilteredMovies(movies, keyword, isShortMovie) {
  const filteredMovies = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase();
    const movieEn = String(movie.nameEN).toLowerCase();
    const searchedMovie = keyword.toLowerCase();
    return movieRu.includes(searchedMovie) || movieEn.includes(searchedMovie);
  });

  if (isShortMovie) {
    return getShortMovies(filteredMovies);
  } else {
    return filteredMovies;
  }
}

//отфильтровать короткометражки
function getShortMovies(movies) {
  return movies.filter((movie) => movie.duration < 40);
}


export {
  getFilteredMovies,
  getShortMovies
}