import React, { useEffect } from 'react';
import MainPage from './Components/MainPage/MainPage';

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
  }, [searchParams]);

  return (
    <div>
      {characters === null
        ? <p>Loading...</p>
        : <MainPage />
      }
    </div>
  );
}

export default App;