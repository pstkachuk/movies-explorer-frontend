import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useContext, useEffect, useState } from 'react';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useLocation } from 'react-router-dom';

function SearchForm({ handleSearch, handleFilterChecked, isShortMoviesChecked }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState('');
  const { values, handleChange, isValid, setIsValid } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    isValid ? handleSearch(values['search-input']) : setErrorMessage('Нужно ввести ключевое слово');
  }

  useEffect(() => {
    setErrorMessage('');
  }, [isValid]);

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('inputValue')) {
      values['search-input'] = localStorage.getItem('inputValue');
      setIsValid(true);
    }
  }, [currentUser])

  return(
    <section className="search-form">
      <form 
        className="search-form__form" 
        name="search-form" 
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="search-form__input"
          name="search-input"
          type="text"
          placeholder="Фильм"
          required
          value={values['search-input'] || ''}
          onChange={handleChange}
        />
        <span className="search-form__error">
          {errorMessage}
        </span>
        <button className="search-form__submit-button" type="submit">Найти</button>
        <FilterCheckbox handleFilterChecked={handleFilterChecked} isShortMoviesChecked={isShortMoviesChecked} />
      </form>
    </section>
  )
}

export default SearchForm;