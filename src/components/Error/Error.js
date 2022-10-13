import './Error.css';
import { useLocation } from 'react-router-dom';

function Error() {
  const location = useLocation();

  return (
    <div className={ `error ${ location.pathname === "/profile" && "error_profile" } ` }>
      При авторизации произошла ошибка. Токен не передан или передан не в том формате
    </div>
  )
}

export default Error;