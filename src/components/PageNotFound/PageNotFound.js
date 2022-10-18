import './PageNotFound.css';

function PageNotFound({ goBack }) {
  return (
    <div className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>      
      <button className="not-found__button" onClick={ goBack } type="button">Назад</button>
    </div>
  )
}

export default PageNotFound;