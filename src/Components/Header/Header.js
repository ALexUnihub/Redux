import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFavCharacterId } from '../../reducer/charactersSlice';

function Header(props) {
  let favCharactersLength = useSelector(getFavCharacterId);
  favCharactersLength = favCharactersLength.length;

  let charactersClassName = 'header__link';
  let favouritesClassName = 'header__link';

  if (window.location.href.includes('characters')) {
    charactersClassName += ' active';
  }
  if (window.location.href.includes('Favourites')) {
    favouritesClassName += ' active';
  }

  return (
    <div className='header'>
      <div className='container header'>

        <div className ='header__links'>
          <Link
            to={`/characters`}
            className={charactersClassName}
            >Characters
          </Link>
          <Link
            to={`/Favourites`}
            className={favouritesClassName}
            >Favourites
          </Link>
        </div>

        <div className='header__favorites__num'>
          <span className='symbol' data-v-62216c96>♡ {favCharactersLength}</span>
        </div>

      </div>
    </div>
  );
}

export default Header;
