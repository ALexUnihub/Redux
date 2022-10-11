import './Favourites.css';
import Header from "../Header/Header";
import AlertElement from '../Alerts/Alerts';
import { useDispatch, useSelector } from 'react-redux';
import { getFavCharacters } from '../../reducer/charactersSlice';
import { CharactersCards } from '../CharactersCards/CharactersCards';
import { useEffect } from 'react';

export default function Favourites(props) {
  const favChars = Object.values(useSelector(getFavCharacters));

  return (
    <>
      {favChars.length > 0
        ? <CharactersCards items={favChars}/>
        : <div>No cards</div>
      }
    </>
  );
}