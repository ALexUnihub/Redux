import React, { useEffect } from 'react';
import MainPage from './Components/MainPage/MainPage';

import { getCurrentPage } from './reducer/stateManager';
import { setCharactersFetch, getCharacters } from './reducer/charactersSlice';
import { useDispatch, useSelector } from 'react-redux';

// fix
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const characters = useSelector(getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCharactersFetch({ 
      page: searchParams.get('page'),
      species: searchParams.get('species'),
      name: searchParams.get('name'),
    }));
  }, [searchParams.get('page')]);

  // useEffect(() => {
  //   dispatch(setCharactersFetch(currentPage));
  // }, [currentPage]);

  // // console.log('app', currentPage, characters);

  return (
    <div>
      {characters === null
        ? <p>Loading...</p>
        : <MainPage />
        // : <MainPage items={characters}/>
      }
    </div>
  );
}

export default App;