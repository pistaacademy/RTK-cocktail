import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './index.css';
import Home from './pages';
import SingleCocktail from './pages/SingleCocktail';
import store from "./redux/store";
import { Provider } from 'react-redux';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/cocktail/:id",
        element: <SingleCocktail />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
);


