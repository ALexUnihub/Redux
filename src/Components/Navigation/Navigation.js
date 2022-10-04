import './Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { 
  setSpecies,
  setName,
  setInputValue,
  getQueryParams,
  getInputValue,
} from '../../reducer/stateManager';
import { Link } from 'react-router-dom';

function Navigation(props) {
  const btnNames = ['All', 'Human', 'Animal', 'Alien'];

  const queryState = useSelector(getQueryParams);
  const inputValue = useSelector(getInputValue);
  const dispatch = useDispatch();

  const spieciesSetter = (event) => {
    let newSpecies = {
      queryLine: '',
      obj: {},
    };

    const links = event.target.closest('div').querySelectorAll('a');
    for (let link of links) {
      if (link.classList.contains('active')) {
      }

      if (link === event.target) {
        link.classList.add('active');
        newSpecies.queryLine = link.textContent.toLowerCase();
      }
    }

    dispatch(setSpecies(newSpecies.queryLine));
  };

  const nameSetter = (event) => {
    const newInputValue = event.target.value;

    dispatch(setInputValue(newInputValue));
  };

  const findCharacters = (event) => {
    if (event.code !== 'Enter' && event.code !== 'NumpadEnter') {
      return;
    }

    let name = event.target.value.trim();
    
    dispatch(setName(name));
  };

  const clearHandler = (event) => {
    
  };

  return (
    <div className='navigation'>
      <div className='container navigation'>

        <NavLinks
          items={btnNames}
          species={queryState.species}
          setter={spieciesSetter}
        />

        <div className='nav__search'>
          <input
            value={inputValue}
            type='text'
            placeholder='Search by name...'
            onKeyUp={findCharacters}
            onChange={nameSetter}
          ></input>
          <button
            className='nav__button search'
          >Search</button>
          <button
            className='nav__button clear'
          >Clear</button>
        </div>

      </div>
    </div>
    
  );
}

export default Navigation;

function NavLinks(props) {
  const items = props.items.map(item => {
    let defaultClassName = 'nav__btn__item';
    let itemLink = `?species=${item}`;

    if (props.species === item.toLowerCase()) {
      defaultClassName += ' active';
    }

    if (item === 'All') {
      itemLink = ``;
    }

    return (
      <Link
        key={item}
        to={itemLink}
        className={defaultClassName}
        onClick={props.setter}
        >{item}
      </Link>
    );
  });

  return (
    <div className='nav__btns'>
      {items}
    </div>
  );
}