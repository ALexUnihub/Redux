import './Favourites.css';
import Header from "../Header/Header";
import { useDispatch, useSelector } from 'react-redux';
import { getFavCharactersLength } from '../../reducer/favouriteSlice';
import { CharactersCards } from '../CharactersCards/CharactersCards';
import { useEffect } from 'react';
import { initializing } from '../../App';

export default function Favourites(props) {
  const favCharactersLength = useSelector(getFavCharactersLength);
  let favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));

  if (!favCharacters) {
    favCharacters = [];
  }

  const dispatch = useDispatch();

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