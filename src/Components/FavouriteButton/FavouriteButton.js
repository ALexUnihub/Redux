import { setAlertMessage } from '../../reducer/alertSlice';
import { setFavCharactersLength, getFavCharactersLength } from '../../reducer/favouriteSlice';


export default function FavouriteButton(props) {

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