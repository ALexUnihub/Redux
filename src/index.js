import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
// router && routs
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import CharacterCard from './Components/CharacterCard/CharacterCard';
import Favourites from './Components/Favourites/Favourites';
import ErrorPage from './ErrorPage/ErrorPage';

// fixed
import Header from './Components/Header/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AlertElement from './Components/Alerts/Alerts';
// 

const container = document.getElementById('root');
const root = createRoot(container);

// const router = createBrowserRouter([
//   {
//     index: true,
//     element: <Navigate to="characters"/>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "characters",
//     element: <App />,
//   },
//   {
//     path: "Favourites",
//     element: <Favourites />,
//   },
//   {
//     path: 'character/:characterId',
//     element: <CharacterCard />,
//   },
// ]);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        
        <BrowserRouter>
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
        </BrowserRouter>
        
        
      </Provider>
      {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
