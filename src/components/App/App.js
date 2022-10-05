import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Promo from '../Promo/Promo';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <Header loggedIn={ loggedIn } />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
