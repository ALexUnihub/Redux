import React, { useEffect } from 'react';
import './App.css';
import MainPage from './Components/MainPage/MainPage';

import stateManager, {
  setCurrentPage,
  setCharacters,
  setPages,
  getCharacters,
  getCurrentPage,
  getPages,

  // fetch
  setCharactersFetch,
} from './reducer/stateManager';

import { useDispatch, useSelector } from 'react-redux';

function App() {
  let currentPage = useSelector(getCurrentPage);
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharactersFetch(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div>
      {characters === null
        ? <p>Loading...</p>
        : <MainPage items={characters}/>
      }
    </div>
  );
}

export default App;
