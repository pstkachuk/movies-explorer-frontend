import './TooltipMessage.css';
import { useLocation } from 'react-router-dom';

function TooltipMessage({ tooltip }) {
  const location = useLocation();

  return (
    <div className={
       `tooltip ${ location.pathname === "/profile" && "tooltip_profile" } ${ location.pathname === "/movies" && "tooltip_movies" } ${ tooltip.isShow && "tooltip_show" } ` 
       }>
      { tooltip.message }
    </div>
  )
}

export default TooltipMessage;