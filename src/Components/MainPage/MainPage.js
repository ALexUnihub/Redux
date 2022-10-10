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

function MainPage(props) {
  const pageParams = useSelector(getQueryParams);
  const [searchParams, setSearchParams] = useSearchParams({ page: pageParams.page });

  useEffect(() => {
    setSearchParams(createURLObj(pageParams))
  }, [pageParams]);

  return (
    <div className='main__page'>
      <Header />
      <div className='application__wrapper'>
        <AlertElement />
        <Navigation />
        <CharactersCards items={props.items} isFooter={true}/>
      </div>
     
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