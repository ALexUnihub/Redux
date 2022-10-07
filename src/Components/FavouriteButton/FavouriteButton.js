import { addCharOnLocalStorage } from '../../reducer/favouriteSlice';
import { useDispatch } from 'react-redux';

export default function FavouriteButton(props) {
  const dispatch = useDispatch();

  return (
    <>
      {props.character.isFavourite
        ? <button
            className='add-fav-btn'
            onClick={(event) => {
              event.preventDefault();
              dispatch(addCharOnLocalStorage({
                toAdd: false,
                char: props.character,
              }));
            }}
          >Remove from Favourites
          </button>
        : <button
            className='add-fav-btn'
            onClick={(event) => {
              event.preventDefault();
              dispatch(addCharOnLocalStorage({
                toAdd: true,
                char: props.character,
              }));
            }}
          >Add to Favourites
          </button>
      }
    </>
  );
}