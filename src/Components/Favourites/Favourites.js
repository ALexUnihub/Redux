import './Favourites.css';
import Header from "../Header/Header";
import { useDispatch, useSelector } from 'react-redux';
import {
  setToShow,
  getFavCharacters,
  getToShow,
} from '../../reducer/stateManager';
import { CharactersCards } from '../CharactersCards/CharactersCards';

export default function Favourites(props) {
  const favCharacters = useSelector(getFavCharacters);
  const toShow = useSelector(getToShow);
  const dispatch = useDispatch();

  if (!toShow.favourites) {
    dispatch(setToShow({
      characters: false,
      favourites: true,
    }));
  }

  return (
    <>
      <Header />
      <div className="container fav">
        {favCharacters.length > 0
          ? <CharactersCards items={favCharacters}/>
          : <div>No cards</div>
        }
      </div>
    </>
  );
}