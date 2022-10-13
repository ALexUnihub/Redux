import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
// router && routs
import { Navigate, NavLink } from "react-router-dom";
import CharacterCard from './Components/CharacterCard/CharacterCard';
import Favourites from './Components/Favourites/Favourites';
import ErrorPage from './ErrorPage/ErrorPage';

import Header from './Components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AlertElement from './Components/Alerts/Alerts';

// auth
import { AuthProvider } from './Auth/auth';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import NavBar from './Components/NavLinks/NavLinks';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <AuthProvider>
        
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path='*' element={<Navigate to='/login' />} />
            <Route path='/register' element={<Login isRegister={true}/>} />
            <Route path='/login' element={<Login />} />

            <Route path='/api/*'
              element={<RequireAuth>
                        <Characters />
                      </RequireAuth>}
            />
          </Routes>
          
        </BrowserRouter>
        
        </AuthProvider>
      </Provider>
  </React.StrictMode>
);

function Characters() {
  return (
    <>
      <Header />

      <div className='app__wraper'>
        <AlertElement />

        <Routes>
          <Route
            index
            element={<Navigate to="characters" replace/>}
          />
          <Route path='characters' element={<App />} />
          <Route path='character/:characterId' element={<CharacterCard />} />
          <Route path='Favourites' element={<Favourites />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}