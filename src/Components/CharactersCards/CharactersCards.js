import './CharactersCards.css';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFavCharacters,
  getFavCharacters,
} from '../../reducer/stateManager';
import { Link } from 'react-router-dom';

function CharactersCards(props) {
  const charactersCards = props.items.map(item => {
    return (
      <Card item={item} key={item.id}/>
    );
  });

  return (
    <div className='container cards'>
      <div className='cards__grid'>{charactersCards}</div>
      {props.isFooter
        ? <Footer />
        : <></>
      }
    </div>
  );
}

export default CharactersCards;

function Card(props) {
  const favCharacters = useSelector(getFavCharacters);
  const dispatch = useDispatch();
  let inFavourites = false;

  if (favCharacters.find(item => item.id === props.item.id)) {
    inFavourites = true;
  }

  return (
    <Link to={`/character/${props.item.id}`} className='card__link' id='character'>
      <div className='card'>
        <img src={props.item.image} alt={props.item.name} />
        <div className='card__info'>
          <h4>{props.item.name}</h4>
          <p>{props.item.species} - {props.item.status}</p>
          {inFavourites
            ? <button onClick={(event) => {
              event.preventDefault();

              let arr = event.target.closest('a').href.split('/');
              let currId = parseInt(arr[arr.length - 1]);

              dispatch(setFavCharacters({ add: false, id: currId, }));
            }}>Remove from Favourites</button>

            : <button onClick={(event) => {
              event.preventDefault();

              let arr = event.target.closest('a').href.split('/');
              let currId = parseInt(arr[arr.length - 1]);

              dispatch(setFavCharacters({ add: true, id: currId, }));
            }}>Add to Favourites</button>
          }
        </div>
      </div>
    </Link>
  );
}

export { CharactersCards, Card };