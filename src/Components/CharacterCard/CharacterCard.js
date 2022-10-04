import './CharacterCard.css';
import Header from '../Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrCharacterId,
  getCurrCharacterId,
} from '../../reducer/stateManager';

export default function CharacterCard(props) {
  const currCharId = useSelector(getCurrCharacterId);
  const dispatch = useDispatch();

  getCharacter(dispatch);
  // console.log(currCharId);

  return (
    <>
      <Header />
      <div className='container'>
        <div className='wrapper'>
          <div className='character-card'>
            {currCharId}
          </div>
        </div>
      </div>
    </>
  );
}

async function getCharacter(dispatch) {
  let arr = window.location.href.split('/');
  const currId = parseInt(arr[arr.length - 1]);

  let response = await fetch(`https://rickandmortyapi.com/api/character/${currId}`);
  let responseJSON = await response.json();

  dispatch(setCurrCharacterId(responseJSON.id));
}