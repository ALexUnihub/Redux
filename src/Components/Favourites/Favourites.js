import './Favourites.css';
import Header from "../Header/Header";
import AlertElement from '../Alerts/Alerts';
import { useSelector } from 'react-redux';
import { getFavCharacterId } from '../../reducer/favouriteSlice';
import { CharactersCards } from '../CharactersCards/CharactersCards';

export default function Favourites(props) {
  let favCharactersLength = useSelector(getFavCharacterId);
  favCharactersLength = favCharactersLength.length;
  let favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));

  if (!favCharacters) {
    favCharacters = [];
  } else {
    favCharacters = favCharacters.map(item => {
      item.isFavourite = true;
      return item;
    });
  }

  return (
    <>
      <Header />
      <div className='application__wrapper'>
        <AlertElement />
      </div>
      <div className="container fav">
        {favCharactersLength > 0
          ? <CharactersCards items={favCharacters}/>
          : <div>No cards</div>
        }
      </div>
    </>
  );
}