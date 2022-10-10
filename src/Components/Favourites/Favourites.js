import './Favourites.css';
import Header from "../Header/Header";
import AlertElement from '../Alerts/Alerts';
import { useDispatch, useSelector } from 'react-redux';
import { getFavCharacterId, getFavCharacters, getFavsFromLocalStorage, setFavCharacters } from '../../reducer/charactersSlice';
import { CharactersCards } from '../CharactersCards/CharactersCards';
import { useEffect } from 'react';

export default function Favourites(props) {
  let favCharactersLength = useSelector(getFavCharacterId);
  favCharactersLength = favCharactersLength.length;
  let favCharacters = useSelector(getFavCharacters);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavsFromLocalStorage());

    return function clearFavsArr() {
      dispatch(setFavCharacters([]));
    }
  }, [favCharactersLength]);

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