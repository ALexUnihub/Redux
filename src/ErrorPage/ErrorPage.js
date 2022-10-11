import './ErrorPage.css';

export default function ErrorPage() {
    return (
      <div id="error-page">
        <div className='error__wrapper'>
          <h1 className='error__title'>The page you're looking for is not found</h1>
          <a href='/characters'>Back to Characters</a>
        </div>
      </div>
    );
}
