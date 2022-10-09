import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
