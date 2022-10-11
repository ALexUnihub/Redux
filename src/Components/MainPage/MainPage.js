import './MainPage.css';
import Navigation from '../Navigation/Navigation';
import CharactersCards from '../CharactersCards/CharactersCards';
import { useSelector } from 'react-redux';
import { getCharacters } from '../../reducer/charactersSlice';

function MainPage(props) {
  const characters = useSelector(getCharacters);

  return (
    <div className='application__wrapper'>
      <Navigation />
      <CharactersCards items={characters} isFooter={true}/>
    </div>
  );
}

export default MainPage;