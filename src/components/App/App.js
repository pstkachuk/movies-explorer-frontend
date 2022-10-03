import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <Header loggedIn={ loggedIn } />
    </div>
  );
}

export default App;
