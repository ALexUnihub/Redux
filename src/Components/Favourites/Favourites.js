import './Favourites.css';
import { useSelector } from 'react-redux';
import { getFavCharacters } from '../../reducer/charactersSlice';
import { CharactersCards } from '../CharactersCards/CharactersCards';

export default function Favourites(props) {
  const favChars = Object.values(useSelector(getFavCharacters));

  return (
    <>
      {favChars.length > 0
        ? <CharactersCards items={favChars}/>
        : <div className='container__cards'>No cards</div>
      }
    </>
  );
}