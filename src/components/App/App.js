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
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <div className="page">
      <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
        <Header loggedIn={ loggedIn } />
      </Route>
      
      <main>
        <Switch>

          <Route exact path="/">
            <Main />
          </Route>      

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <ProtectedRoute 
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute 
            exact
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />

          <ProtectedRoute 
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
          />

          <Route path="*">
            <PageNotFound goBack={goBack} />
          </Route>

        </Switch>
      </main>

      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <Footer />
      </Route>

    </div>
  );
}

export default App;
