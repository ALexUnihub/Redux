import './Footer.css';
import { Link } from 'react-router-dom';
import {
  setNextPage,
  getCurrentPage,
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
        <Link to={`?page=${currPage - 1}`}
          className={leftPageClass}
          onClick={pageSetter}
        >{leftBtnName}</Link>
        <Link to={`?page=${currPage + 1}`}
          className={rightPageClass}
          onClick={pageSetter}
        >{rightBtnName}</Link>
      </div>

    </div>
  );
}

export default Footer;