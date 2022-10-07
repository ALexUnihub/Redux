import './CharactersCards.css';
import Footer from '../Footer/Footer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters, getIsError, } from '../../reducer/stateManager';
// import { setAlertMessage } from '../../reducer/alertSlice';
import { getFavCharacterId } from '../../reducer/favouriteSlice';
import { getCurrCharacter } from '../../reducer/currCharacterSlice';
import { Link } from 'react-router-dom';

function CharactersCards(props) {
  const isError = useSelector(getIsError);
  const charactersCards = props.items.map(item => {
    return (
      <Card item={item} key={item.id}/>
    );
  });

  return (
    <div className='container cards'>
      <div className='cards__grid'>
        {isError
          ? <div>No cards</div>
          : charactersCards
        }
      </div>
      {props.isFooter
        ? <Footer />
        : <></>
      }
    </div>
  );
}

export default CharactersCards;

function Card(props) {
  let favCharactersLength = useSelector(getFavCharacterId);
  favCharactersLength = favCharactersLength.length;
  
  const favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));
  const dispatch = useDispatch();

  return (
    <Link to={`/character/${props.item.id}`} className='card__link' id='character'>
      <div className='card'>
        <img src={props.item.image} alt={props.item.name} />
        <div className='card__info'>
          <h4>{props.item.name}</h4>
          <p>{props.item.species} - {props.item.status}</p>
          <FavouriteButton 
            inFavourites={props.item.isFavourite}
            dispatch={dispatch}
            character={props.item}
          />
        </div>
      </div>
    </Link>
  );
}

export { CharactersCards, Card };