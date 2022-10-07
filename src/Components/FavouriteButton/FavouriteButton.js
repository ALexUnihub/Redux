import { setAlertMessage } from '../../reducer/alertSlice';
import { addCharOnLocalStorage, setFavsId } from '../../reducer/favouriteSlice';
import { getCharacters } from '../../reducer/favouriteSlice';
import { useSelector, useDispatch } from 'react-redux';

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

// function dispatcher(dispatch, arr, message, isAdd) {
//   // dispatch(setFavCharactersLength(arr.length));
//   dispatch(setFavsId(arr));
//   dispatch(setAlertMessage({
//     add: isAdd,
//     message: message,
//   }));
//   setTimeout(() => {
//     dispatch(setAlertMessage({
//       add: !isAdd,
//       message: message,
//     }));
//   }, 5000);
// }