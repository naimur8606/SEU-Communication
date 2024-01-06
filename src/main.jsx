import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/MainRoutes';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <div className='max-w-7xl mx-auto bg-[#f9d4b6d2]'>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
