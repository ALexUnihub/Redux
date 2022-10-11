import './Footer.css';
import { Link, useSearchParams } from 'react-router-dom';
import {
  setPage,
  getPages,
  getQueryParams,
} from '../../reducer/stateManager';
import { useSelector, useDispatch } from 'react-redux';

function Footer(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  let currPage = parseInt(searchParams.get('page'));
  
  const pages = useSelector(getPages);

  if (!currPage) {
    currPage = 1;
  }

  return (
    <div className='container footer'>
      
      <p>Page {currPage} of {pages}</p>

      <div className='footer__nav'>
        <a
          id='page'
          className={currPage === 1 ? 'left-btn disabled' : 'left-btn'}
          onClick={() => setSearchParams({ page: currPage - 1 })}
        >{' << Prev '}</a>
        <a
          id='page'
          className={currPage === pages ? 'left-btn disabled' : 'left-btn'}
          onClick={() => setSearchParams({ page: currPage + 1 })}
        >{' Next >> '}</a>
      </div>

    </div>
  );
}

export default Footer;