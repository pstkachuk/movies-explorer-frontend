import './FilterCheckbox.css';

function FilterCheckbox() {

  return(
    <div className="filter-container">
    <label className="filter">
      <input
        className="filter__checkbox" 
        type="checkbox"
        id="filter"
        // checked={true}
      />      
      <span className="filter__switch"></span>
    </label>
      <label htmlFor="filter" className="filter__label">
        Короткометражки
      </label>

    </div>
  )
}

export default FilterCheckbox;