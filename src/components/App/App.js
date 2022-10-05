import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <Header loggedIn={ loggedIn } />      
      <Main />
      <Footer />
    </div>
  );
}

export default App;
