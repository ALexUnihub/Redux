import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavCharacters } from '../../reducer/charactersSlice';

import { logout } from '../../reducer/authSlice';

function Header(props) {
  let favCharactersLength = Object.values(useSelector(getFavCharacters)).length;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  return (
    <div className='header'>
      <div className='container__header'>

        <div className ='header__links'>
          <NavLink
            to={`/characters`}
            className='header__link'
            >Characters
          </NavLink>
          <NavLink
            to={`/Favourites`}
            className='header__link'
            >Favourites
          </NavLink>
        </div>

        <div className='btn__wrapper'>
          <button className='btn__logout' onClick={handleLogout}>Logout</button>

          <div className='favorites__num'>
            <span className='symbol'>♡</span>
            {` ${favCharactersLength}`}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
