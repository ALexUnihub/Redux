import './Header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setToShow, getToShow, getFavCharacters } from '../../reducer/stateManager';

function Header(props) {
  const toShow = useSelector(getToShow);
  const favCharacters = useSelector(getFavCharacters);
  const dispatch = useDispatch();

  let charactersClassName = 'header__link';
  let favouritesClassName = 'header__link';

  if (toShow.characters) {
    charactersClassName += ' active';
  }
  if (toShow.favourites) {
    favouritesClassName += ' active';
  }

  return (
    <div className='header'>
      <div className='container header'>

        <div className ='header__links'>
          <Link
            to={`/characters`}
            className={charactersClassName}
            onClick={() => dispatch(setToShow({ 
              characters: true,
              favourites: false,
             }))}
            >Characters
          </Link>
          <Link
            to={`/Favourites`}
            className={favouritesClassName}
            onClick={() => dispatch(setToShow({ 
              characters: false,
              favourites: true,
             }))}
            >Favourites
          </Link>
        </div>

        <div className='header__favorites__num'>
          <span className='symbol' data-v-62216c96>♡ {favCharacters.length}</span>
        </div>

      </div>
    </div>
  );
}

export default Header;
