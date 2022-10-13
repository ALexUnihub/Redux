import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
import CharacterCard from './Components/CharacterCard/CharacterCard';
import Favourites from './Components/Favourites/Favourites';
import ErrorPage from './ErrorPage/ErrorPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import NavBar from './Components/NavBar/NavBar';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        
        <BrowserRouter>

          <Routes>
            <Route path='*' element={<ErrorPage />} />
            <Route element={<NavBar />}>
              <Route path='/register' element={<Login isRegister={true}/>} />
              <Route path='/login' element={<Login />} />
            </Route>
            <Route element={<RequireAuth />} >
              <Route path='characters' element={<App />} />
              <Route path='character/:characterId' element={<CharacterCard />} />
              <Route path='Favourites' element={<Favourites />} />
            </Route>
          </Routes>
          
        </BrowserRouter>
        
      </Provider>
  </React.StrictMode>
);