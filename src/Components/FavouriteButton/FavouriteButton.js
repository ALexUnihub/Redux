import { addCharacterToFavourits, removeCharacterFromFavourits } from '../../reducer/charactersSlice';
import { useDispatch } from 'react-redux';

export default function FavouriteButton(props) {
  const dispatch = useDispatch();

  return (
    <button
      className='add-fav-btn'
      onClick={(event) => {
        event.preventDefault();
        
        if (props.isFavourite) {
          dispatch(removeCharacterFromFavourits(props.character));
        } else {
          dispatch(addCharacterToFavourits(props.character));
        }
      }}
    >{props.isFavourite
        ? 'Remove from Favourites'
        : 'Add to Favourites'
      }
    </button>
  );
}