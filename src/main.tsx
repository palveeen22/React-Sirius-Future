import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";

import './index.css'
import { store } from './store/store.ts';
import { router } from './routes/index.tsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
