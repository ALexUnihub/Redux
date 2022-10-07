import './Footer.css';
import { Link, useSearchParams } from 'react-router-dom';
import {
  setNextPage,
  getPages,
  getQueryParams,
} from '../../reducer/stateManager';
import { useSelector, useDispatch } from 'react-redux';

function Footer(props) {
  const leftBtnName = ' << Prev ';
  const rightBtnName = ' Next >> ';

  const queryParams = useSelector(getQueryParams);
  const currPage = queryParams.page;
  const pages = useSelector(getPages);
  const dispatch = useDispatch();

  let leftPageClass = 'left-btn';
  let rightPageClass = 'right-btn';

  if (currPage === 1) {
    leftPageClass += ' disabled';
  }

  if (currPage === pages) {
    rightPageClass += ' disabled';
  }

  const pageSetter = (event) => {
    let coefficient = 0;
    let isRight = false;

    if (event.target.classList.contains('right-btn')) {
      isRight = true;
    }

    if (isRight && currPage < pages) {
      coefficient = 1;
    } else if (currPage > 1) {
      coefficient = -1;
    }

    dispatch(setNextPage(coefficient));
  };

  return (
    <div className='container footer'>
      
      <p>Page {currPage} of {pages}</p>

      <div className='footer__nav'>
        <Link to={`/characters/`}
          id='page'
          className={leftPageClass}
          onClick={pageSetter}
        >{leftBtnName}</Link>
        <Link to={`/characters/`}
          id='page'
          className={rightPageClass}
          onClick={pageSetter}
        >{rightBtnName}</Link>
      </div>

    </div>
  );
}

export default Footer;