import './CharactersCards.css';
import Footer from '../Footer/Footer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import { useSelector } from 'react-redux';
import { getIsError, } from '../../reducer/mainPageSlice';
import { getFavCharacters } from '../../reducer/charactersSlice';
import { Link } from 'react-router-dom';

function CharactersCards(props) {
  const isError = useSelector(getIsError);
  const favouriteCharacters = useSelector(getFavCharacters);

  const charactersCards = props.items.map(item => {
    return (
      <Card
        item={item}
        key={item.id}
        favChars={favouriteCharacters}
      />
    );
  });

  return (
    <div className='container__cards'>
      <div className='cards__grid'>
        {isError
          ? <div>No cards</div>
          : charactersCards
        }
      </div>
      {props.isFooter
        ? <Footer/>
        : null
      }
    </div>
  );
}

export default CharactersCards;

function Card(props) {
  let isFavourite = Boolean(props.favChars[props.item.id]);

  return (
    <Link to={`/character/${props.item.id}`} className='card__link' id='character'>
      <div className='card'>
        <img src={props.item.image} alt={props.item.name} />
        <div className='card__info'>
          <h4>{props.item.name}</h4>
          <p>{props.item.species} - {props.item.status}</p>
          <FavouriteButton 
            isFavourite={isFavourite}
            character={props.item}
          />
        </div>
      </div>
    </Link>
  );
}

export { CharactersCards, Card };