import './MainPage.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import CharactersCards from '../CharactersCards/CharactersCards';

function MainPage(props) {

  return (
    <div className='main__page'>
      <Header />
      <Navigation />
      <CharactersCards items={props.items} isFooter={true}/>
    </div>
  );
}

export default MainPage;