import './CharacterCard.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrCharacter,
  getCurrCharacter,
  // fetch
  fetchCurrCharacter,
  // err
  getIsError,
} from '../../reducer/stateManager';
import { useEffect } from 'react';

export default function CharacterCard(props) {
  const currCharacter = useSelector(getCurrCharacter);
  const isError = useSelector(getIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    let arr = window.location.href.split('/');
    const currId = parseInt(arr[arr.length - 1]);
    
    dispatch(fetchCurrCharacter(currId));
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='container'>
        <div className='wrapper'>
          <div className='character-card-wrapper'>
            {isError
              ? <div>No character was found</div>
              : <CurrCharacterCard character={currCharacter} />
            }
          </div>
        </div>
      </div>
    </>
  );
}

function CurrCharacterCard(props) {
  return (
    <div className='character-card'>
      <div className='character-card-info'>
        <h1>{props.character.name}</h1>
        <p>{props.character.species} - {props.character.status}</p>
        <p>Last known location: {props.character.location.name}</p>
      </div>
      <div className='character-card-img'>
        <img 
          alt={props.character.name}
          src={props.character.image}
        /> 
      </div>
    </div>
  );
}