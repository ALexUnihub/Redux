import './CharacterCard.css';
import Header from '../Header/Header';
import AlertElement from '../Alerts/Alerts';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getIsError } from '../../reducer/stateManager';
import { fetchCurrCharacter, getCurrCharacter } from '../../reducer/currCharacterSlice';
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
      {/* <Header /> */}
      {/* <div className='application__wrapper'>
        <AlertElement />
      </div> */}
      <div className='container__card'>
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
    </>
  );
}

function CurrCharacterCard(props) {
  const dispatch = useDispatch();

  let inFavourites = props.character.isFavourite;

  return (
    <div className='character-card'>
      <div className='character-card-info'>
        <h1>{props.character.name}</h1>
        <p>{props.character.species} - {props.character.status}</p>
        <p>Last known location: {props.character.location?.name}</p>
        <p>First seen in: {props.episode}</p>
        <FavouriteButton
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