import './MainPage.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import CharactersCards from '../CharactersCards/CharactersCards';
import AlertElement from '../Alerts/Alerts';

function MainPage(props) {

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