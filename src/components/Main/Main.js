import  './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';

function Main() {

  return(
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
    </div>
  )
}

export default Main;