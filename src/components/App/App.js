import { useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [tooltip, setTooltip] = useState({});
  const [isPreloaderOpen, setIsPreloaderOpen] = useState(false);
  const [savedUserMovies, setSavedUserMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    checkAuth();
  }, [])


  //загрузить сохраненные фильмы
  useEffect(() => {
    if (loggedIn && currentUser) {
      mainApi.getSavedMovies()
      .then((data) => {
        setSavedUserMovies(data.filter(item => item.owner === currentUser._id))
      })
      .catch((err) => {
        console.log(err.message);
        setTooltip({
          isShow: true,
          message: err.message,
          isError: true
        })
      })
    }
  }, [currentUser, loggedIn])

  function checkAuth() {
    setIsPreloaderOpen(true);
    mainApi.getUserInfo()
    .then((data) => {
      if (data) {
        setLoggedIn(true);
        setCurrentUser(data);
        history.push(location.pathname)
      }
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message,
        isError: true
      })
    })
    .finally(() => {
      setIsPreloaderOpen(false);
    })
  }  

  function goBack() {
    history.goBack();
  }

  function handleRegister({ name, email, password }) {
    setIsPreloaderOpen(true);
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
        message: err.message,
        isError: true
      })
    })
    .finally(() => {
      setIsPreloaderOpen(false);
    })
  }

  function handleLogin({ email, password }) {
    setIsPreloaderOpen(true);
    mainApi.login(email, password)
    .then((res) => {
      if (res) {
        setLoggedIn(true);
        setCurrentUser(res);
        history.push('/movies')
      }
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message,
        isError: true
      })
    })
    .finally(() => {
      setIsPreloaderOpen(false);
    })
  }

  function handleSignOut() {
    mainApi.logout();
    setLoggedIn(false);
    setCurrentUser({});
    localStorage.clear();
    history.push('/');
  }

  function handleUpdateUser({ name, email }) {
    setIsPreloaderOpen(true);
    mainApi.setUserInfo(name, email)
    .then((data) => {
      setCurrentUser(data)
      setTooltip({
        isShow: true,
        message: "Данные обновлены!",
        isError: false
      })
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message,
        isError: true
      })
    })
    .finally(() => {
      setIsPreloaderOpen(false);
    })
  }

  //лайкнуть фильм
  function handleSaveMovie(movie) {
    mainApi.createMovie(movie)
    .then((savedMovie) => {
      setSavedUserMovies([savedMovie, ...savedUserMovies])
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message,
        isError: true
      })
    })
  }

  //удалить сохраненный фильм
  function handleDeleteMovie(movie) {
    const deletedMovie = savedUserMovies.find((item) => item.movieId === movie.id || item.movieId === movie.movieId);    
    mainApi.deleteMovie(deletedMovie._id)
    .then((deletedMovie) => {
      const moviesList = savedUserMovies.filter(item => {
        if (movie.id === item.movieId || movie.movieId === item.movieId) {
          return false;
        } else {
          return true;
        }
      });
      setSavedUserMovies(moviesList);
    })
    .catch((err) => {
      console.log(err.message);
      setTooltip({
        isShow: true,
        message: err.message,
        isError: true
      })
    })
  }

  return (  
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
          <Header loggedIn={ loggedIn } />
        </Route>
        
        <main className="main-container">
          <Switch>

            <Route exact path="/">
              <Main />
            </Route>      

            <Route path="/signup">
              <Register 
                onRegister={handleRegister} 
                tooltip={tooltip} 
                isPreloaderOpen={isPreloaderOpen}
              />
            </Route>

            <Route path="/signin">
              <Login 
                onLogin={handleLogin} 
                tooltip={tooltip} 
                isPreloaderOpen={isPreloaderOpen}  
              />
            </Route>

            <ProtectedRoute 
              exact
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              setIsPreloaderOpen={setIsPreloaderOpen}
              isPreloaderOpen={isPreloaderOpen}
              setTooltip={setTooltip}
              tooltip={tooltip}
              onSaveMovie={handleSaveMovie}
              onDeleteMovie={handleDeleteMovie}
              savedUserMovies={savedUserMovies}
            />

            <ProtectedRoute 
              exact
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              savedUserMovies={savedUserMovies}
              onDeleteMovie={handleDeleteMovie}
              tooltip={tooltip}
              setTooltip={setTooltip}
              isPreloaderOpen={isPreloaderOpen}
            />

            <ProtectedRoute 
              exact
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              tooltip={tooltip}
              setTooltip={setTooltip}
              onUpdateUser={handleUpdateUser}
              onSignOut={handleSignOut}
              isPreloaderOpen={isPreloaderOpen}
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
