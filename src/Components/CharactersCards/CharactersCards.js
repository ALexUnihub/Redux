import './CharactersCards.css';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters, getIsError, } from '../../reducer/stateManager';
import { setAlertMessage } from '../../reducer/alertSlice';
import { setFavCharactersLength, getFavCharactersLength } from '../../reducer/favouriteSlice';
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
          : charactersCards}
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
  // const favCharacters = useSelector(getFavCharacters);
  const favCharactersLength = useSelector(getFavCharactersLength);
  const favCharacters = JSON.parse(localStorage.getItem('FAV_CHARS'));
  const dispatch = useDispatch();
  let inFavourites = false;

  if (favCharacters !== null && favCharacters.find(item => item.id === props.item.id)) {
    inFavourites = true;
  }

  return (
    <Link to={`/character/${props.item.id}`} className='card__link' id='character'>
      <div className='card'>
        <img src={props.item.image} alt={props.item.name} />
        <div className='card__info'>
          <h4>{props.item.name}</h4>
          <p>{props.item.species} - {props.item.status}</p>
          <AddToFavButton 
            inFavourites={inFavourites}
            dispatch={dispatch}
          />
        </div>
      </div>
    </Link>
  );
}

export { CharactersCards, Card };

export function AddToFavButton(props) {
  const characters = useSelector(getCharacters);

  return (
    <>
      {props.inFavourites
        ? <button className='add-fav-btn' onClick={(event) => {
          event.preventDefault();

          let currId = 0;

          if (props.character?.id) {
            currId = props.character.id
          } else {
            let arr = event.target.closest('a').href.split('/');
            currId = parseInt(arr[arr.length - 1]);
          }

          let arr = JSON.parse(localStorage.getItem('FAV_CHARS'));
          let idxElemToRemove = 0;
          arr.filter((item, idx) => {
            if (item.id === currId) {
              idxElemToRemove = idx;
            }
          });

          const character = arr.splice(idxElemToRemove, 1)[0];

          localStorage.setItem('FAV_CHARS', JSON.stringify(arr));

          const msg = `${character.name} removed from favourites`;
          dispatcher(props.dispatch, arr, msg, true);
        }}>Remove from Favourites</button>

        : <button className='add-fav-btn' onClick={(event) => {
          event.preventDefault();
          
          let currId = 0;
          let character ={};

          if (props.character?.id) {
            currId = props.character.id
          } else {
            let arr = event.target.closest('a').href.split('/');
            currId = parseInt(arr[arr.length - 1]);
          }

          if (characters) {
            character = characters.find(item => item.id === currId);
          } else {
            character = props.character;
          }

          let arr = localStorage.getItem('FAV_CHARS');

          if (arr === null) {
            arr = [character];
            localStorage.setItem('FAV_CHARS', JSON.stringify(arr));
          } else {
            arr = Array.from(JSON.parse(arr));
            arr.push(character);
            localStorage.setItem('FAV_CHARS', JSON.stringify(arr));
          }
          const msg = `${character.name} added to favourites`;
          dispatcher(props.dispatch, arr, msg, true);
          // let dispatchAfter100 = throttle(dispatcher, 100);
          // dispatchAfter100(props.dispatch, arr, msg, true);
        }}>Add to Favourites</button>
      }
    </>
  );
}

function dispatcher(dispatch, arr, message, isAdd) {
  dispatch(setFavCharactersLength(arr.length));
  dispatch(setAlertMessage({
    add: isAdd,
    message: message,
  }));
  setTimeout(() => {
    dispatch(setAlertMessage({
      add: !isAdd,
      message: message,
    }));
  }, 5000);
}
