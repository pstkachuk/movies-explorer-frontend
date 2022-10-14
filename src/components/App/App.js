import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <div className="page">
      <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
        <Header loggedIn={ loggedIn } />
      </Route>

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
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <PageNotFound goBack={goBack} />
        </Route>
      </Switch>

      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <Footer />
      </Route>

    </div>
  );
}

export default App;
