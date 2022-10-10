import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
      <div className='container__header'>

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

        <div className='favorites__num'>
          <span className='symbol'>♡</span>
          {` ${favCharactersLength}`}
        </div>

      </div>
    </div>
  );
}

export default Header;
