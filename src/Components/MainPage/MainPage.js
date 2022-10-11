import './MainPage.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import CharactersCards from '../CharactersCards/CharactersCards';
import AlertElement from '../Alerts/Alerts';

// set params
import { getQueryParams } from '../../reducer/stateManager';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getCharacters } from '../../reducer/charactersSlice';

function MainPage(props) {
  // const pageParams = useSelector(getQueryParams);
  // const [searchParams, setSearchParams] = useSearchParams({ page: 1 });

  // useEffect(() => {
  //   console.log(searchParams.get('page'),searchParams.get('name'),searchParams.get('species'));
  //   setSearchParams(createURLObj({ 
  //     page: searchParams.get('page'),
  //     name: searchParams.get('name'),
  //     species: searchParams.get('species'),
  //   }));
  // }, [searchParams.get('page')]);

  const characters = useSelector(getCharacters);

  return (
    <div className='application__wrapper'>
      <Navigation />
      {/* <CharactersCards isFooter={true} /> */}
      <CharactersCards items={characters} isFooter={true}/>
    </div>
  );
}

export default MainPage;

function createURLObj(pageParams) {
  let objURL = {};

  for (let [key, value] of Object.entries(pageParams)) {
    if (value && value !== 'all' && value !== 1) {
      objURL[key] = value;
    }
  }

  return objURL;
}