import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="page">
      <Header loggedIn={ loggedIn } />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
