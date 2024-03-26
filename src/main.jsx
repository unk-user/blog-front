import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import ErrorElement from './routes/404.jsx';
import About from './routes/About.jsx';
import Blog from './routes/Blog.jsx';

import './index.css';
import Posts from './routes/Posts.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: '/Home',
        element: <Blog />
      },
      {
        path: '/Posts',
        element: <Posts />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
