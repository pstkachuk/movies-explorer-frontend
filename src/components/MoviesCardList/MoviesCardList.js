import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
  const location = useLocation();

  return (
    <section className="movies-cards-list">
      <div className="movies-cards-list__cards">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      {
        location.pathname === "/movies"
        &&
        <button className="movies-cards-list__more-movies-button">Ещё</button>
      }
    </section>
  )
}

export default MoviesCardList;