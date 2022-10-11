import './Header.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getFavCharacters } from '../../reducer/charactersSlice';

function Header(props) {
  let favCharactersLength = Object.values(useSelector(getFavCharacters)).length;
  // if (!favCharactersLength) {
  //   favCharactersLength = 0;
  // }
  // console.log(favCharactersLength, favCharactersLength?.length);

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

        <div className='favorites__num'>
          <span className='symbol'>♡</span>
          {` ${favCharactersLength}`}
        </div>

      </div>
    </div>
  );
}

export default Header;
