import './ErrorPage.css';
import { useRouteError } from "react-router-dom";
import Header from "../Components/Header/Header";

export default function ErrorPage() {
    const error = useRouteError();

    return (
      <div id="error-page">
        <Header />
        <div className='error__wrapper'>
          <h1 className='error__title'>The page you're looking for is not found</h1>
          <a href='/characters'>Back to Characters</a>
        </div>
      </div>
    );
}
