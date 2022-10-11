import './CharacterCard.css';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrCharacter, getCurrCharacter, getEpisode } from '../../reducer/currCharacterSlice';
import { getFavCharacters } from '../../reducer/charactersSlice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CharacterCard(props) {
  const currCharacter = useSelector(getCurrCharacter);
  const episode = useSelector(getEpisode);
  
  const dispatch = useDispatch();
  const { characterId } = useParams();

  useEffect(() => {
    dispatch(fetchCurrCharacter(characterId));
  }, [])

  return (
    <div className='container__card'>
      <div className='character-card-wrapper'>
        {!currCharacter
          ? <div>No character was found</div>
          : <CurrCharacterCard
              character={currCharacter}
              episode={episode}
            />
        }
      </div>
    </div>
  );
}

function CurrCharacterCard(props) {
  const favChars = useSelector(getFavCharacters);
  let isFavourite = Boolean(favChars[props.character.id]);

  return (
    <div className='character-card'>
      <div className='character-card-info'>
        <h1>{props.character.name}</h1>
        <p>{props.character.species} - {props.character.status}</p>
        <p>Last known location: {props.character.location?.name}</p>
        <p>First seen in: {props.episode}</p>
        <FavouriteButton
          isFavourite={isFavourite}
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