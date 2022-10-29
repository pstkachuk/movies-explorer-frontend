import './TooltipMessage.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function TooltipMessage({ tooltip }) {
  const location = useLocation();

  useEffect(() => {
    tooltip.isShow = false;
  })

  return (
    <div className={
       `tooltip ${ location.pathname === "/profile" && "tooltip_profile" } ${ (location.pathname === ("/movies") || location.pathname === ("/saved-movies")) && "tooltip_movies" } ${ tooltip.isShow && "tooltip_show" } ` 
       }>
      { tooltip.message }
    </div>
  )
}

export default TooltipMessage;