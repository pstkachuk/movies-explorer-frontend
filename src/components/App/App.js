import { useState, useEffect } from 'react';
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [tooltip, setTooltip] = useState({});
  const history = useHistory();

  function checkAuth() {
    mainApi.getUserInfo()
    .then((data) => {
      if (data) {
        setLoggedIn(true);
        history.push('/movies')
      }
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

  useEffect(() => {
    checkAuth();
}, [])

  function goBack() {
    history.goBack();
  }

  function handleRegister({ name, email, password }) {
    mainApi.createUser(name, email, password)
    .then((res) => {
      if (res._id) {
        handleLogin({ email, password })
      }
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message
      })
    })
  }

  function handleLogin({ email, password }) {
    mainApi.login(email, password)
    .then((res) => {
      if (res) {
        setLoggedIn(true);
        history.push('/movies')
      }
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message
      })
    })
  }

  return (  
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
          <Header loggedIn={ loggedIn } />
        </Route>
        
        <main>
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>      

            <Route path="/signup">
              <Register onRegister={handleRegister} tooltip={tooltip} />
            </Route>

            <Route path="/signin">
              <Login onLogin={handleLogin} tooltip={tooltip} />
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

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
