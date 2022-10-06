import './CharacterCard.css';
import Header from '../Header/Header';
import AlertElement from '../Alerts/Alerts';
import { useDispatch, useSelector } from 'react-redux';
import {
  // getCurrCharacter,
  // getFavCharactersLength,
  // fetch
  // fetchCurrCharacter,
  // err
  getIsError,
} from '../../reducer/stateManager';
import { getFavCharactersLength } from '../../reducer/favouriteSlice';
import { fetchCurrCharacter, getCurrCharacter } from '../../reducer/currCharacterSlice';
import { AddToFavButton } from '../CharactersCards/CharactersCards';
import { useEffect } from 'react';

export default function CharacterCard(props) {
  const currCharacter = useSelector(getCurrCharacter);
  const isError = useSelector(getIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    let arr = window.location.href.split('/');
    const currId = parseInt(arr[arr.length - 1]);
    
    // initializing(dispatch);
    dispatch(fetchCurrCharacter(currId));
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='application__wrapper'>
        <AlertElement />
      </div>
      <div className='container'>
        <div className='wrapper'>
          <div className='character-card-wrapper'>
            {isError
              ? <div>No character was found</div>
              : <CurrCharacterCard
                  character={currCharacter.char}
                  episode={currCharacter.episode}
                />
            }
          </div>
        </div>
      </div>
    </>
  );
}

function CurrCharacterCard(props) {
  // const favCharacters = useSelector(getFavCharacters);
  const favCharactersLength = useSelector(getFavCharactersLength);
  const favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));
  const dispatch = useDispatch();
  let inFavourites = false;

  if (favCharacters !== null && favCharacters.find(item => item.id === props.character?.id)) {
    inFavourites = true;
  }

  return (
    <div className='character-card'>
      <div className='character-card-info'>
        <h1>{props.character.name}</h1>
        <p>{props.character.species} - {props.character.status}</p>
        <p>Last known location: {props.character.location?.name}</p>
        <p>First seen in: {props.episode}</p>
        <AddToFavButton
          inFavourites={inFavourites}
          dispatch={dispatch}
          character={props.character}
        />
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