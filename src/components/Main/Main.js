import  './Main.css';
import Promo from '../Promo/Promo';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {

  return(
    <div className="main">
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </div>
  )
}

export default Main;