import './Footer.css';
import { useSearchParams } from 'react-router-dom';
import { getPages } from '../../reducer/stateManager';
import { useSelector } from 'react-redux';

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
          onClick={() => {
            searchParams.set('page', currPage - 1);
            setSearchParams(searchParams);
          }}
        >{' << Prev '}</a>
        <a
          id='page'
          className={currPage === pages ? 'left-btn disabled' : 'left-btn'}
          onClick={() => {
            searchParams.set('page', currPage + 1);
            setSearchParams(searchParams);
          }}
        >{' Next >> '}</a>
      </div>

    </div>
  );
}

export default Footer;