import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Importações corretas do react-router-dom
import './index.css';

import Inicio from './Pages/Início.jsx';

// Configuração das rotas usando createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
  },
]);

// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);