import './Footer.css';
import { Link } from 'react-router-dom';
import {
  setPage,
  getPages,
  getQueryParams,
} from '../../reducer/stateManager';
import { useSelector, useDispatch } from 'react-redux';

function Footer(props) {
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

  return (
    <div className='container footer'>
      
      <p>Page {currPage} of {pages}</p>

      <div className='footer__nav'>
        <Link to={`/characters/`}
          id='page'
          className={leftPageClass}
          onClick={() => dispatch(setPage(currPage - 1))}
        >{' << Prev '}</Link>
        <Link to={`/characters/`}
          id='page'
          className={rightPageClass}
          onClick={() => dispatch(setPage(currPage + 1))}
        >{' Next >> '}</Link>
      </div>

    </div>
  );
}

export default Footer;