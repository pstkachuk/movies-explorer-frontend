import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return(
    <section className="search-form">
      <form className="search-form__form" name="search-form">
        <input
          className="search-form__input"
          name="search-input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search-form__submit-button" type="submit">Найти</button>
        <FilterCheckbox />
      </form>
    </section>
  )
}

export default SearchForm;