import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCard />
    </div>
  )
}

export default Movies;