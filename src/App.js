import React, { useEffect } from 'react';
import MainPage from './Components/MainPage/MainPage';

import { getCurrentPage } from './reducer/stateManager';
import { setCharactersFetch, getCharacters } from './reducer/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  let currentPage = useSelector(getCurrentPage);
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharactersFetch(currentPage));
  }, [currentPage]);

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