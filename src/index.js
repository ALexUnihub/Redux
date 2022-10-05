import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
// router && routs
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import CharacterCard from './Components/CharacterCard/CharacterCard';
import Favourites from './Components/Favourites/Favourites';

// test saga
// import Counter from './Counter/Counter';
// import { setCounterValue, setAsync } from './reducer/stateManager';


const container = document.getElementById('root');
const root = createRoot(container);

const router = createBrowserRouter([
  {
    index: true,
    // element: <Navigate to="mainPage"/>,
    element: <Navigate to="characters"/>,
  },
  {
    // path: "mainPage",
    path: "characters",
    element: <App />,
  },
  {
    path: "Favourites",
    element: <Favourites />,
  },
  {
    path: 'character/:characterId',
    element: <CharacterCard />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      {/* <Counter
        onIncrement={() => setCounterValue('INCREMENT')}
        onDecrement={() => setCounterValue('DECREMENT')}
        onIncrementAsync={() => setAsync('INCREMENT_ASYNC')}
      /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
