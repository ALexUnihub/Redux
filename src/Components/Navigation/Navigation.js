import './Navigation.css';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, getInputValue } from '../../reducer/mainPageSlice';
import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';

function Navigation(props) {
  const btnNames = useRef([
    'All',
    'Human',
    'Animal',
    'Alien',
  ]).current;

  const inputValue = useSelector(getInputValue);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleEnterKeyUp = event => {
    if (event.code !== 'Enter' && event.code !== 'NumpadEnter') {
      return;
    }

    findCharacters();
  }

  const findCharacters = event => {
    searchParams.set('name', inputValue.trim());
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  const clear = event => {
    searchParams.delete('page');
    searchParams.delete('name');
    setSearchParams(searchParams);
    dispatch(setInputValue(''));
  }

  return (
    <div className='navigation'>

      <div className='container__navigation'>

        <NavLinks items={btnNames} />

        <div className='nav__search'>
          <input
            value={inputValue}
            type='text'
            placeholder='Search by name...'
            onKeyUp={handleEnterKeyUp}
            onChange={event => dispatch(setInputValue(event.target.value))}
          />
          <button
            className='nav__button search'
            disabled={!inputValue && !searchParams.get('name')}
            onClick={findCharacters}
          >Search</button>
          <button
            className='nav__button clear'
            hidden={!inputValue && !searchParams.get('name')}
            onClick={clear}
          >Clear</button>
        </div>

      </div>
    </div>
    
  );
}

export default Navigation;

function NavLinks(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  let currSpecie = searchParams.get('species');

  if (!currSpecie) {
    currSpecie = 'All';
  }

  const setSpecies = event => {
    if (event.target.textContent === 'All') {
      searchParams.delete('species');
    } else {
      searchParams.set('species', event.target.textContent);
    }
    searchParams.delete('page');
    setSearchParams(searchParams);
  }

  const items = props.items.map(item => {
    let defaultClassName = 'nav__btn__item';

    if (currSpecie === item) {
      defaultClassName += ' active';
    }

    return (
      <a
        key={item}
        className={defaultClassName}
        onClick={setSpecies}
        >{item}
      </a>
    );
  });

  return (
    <div className='nav__btns'>
      {items}
    </div>
  );
}

