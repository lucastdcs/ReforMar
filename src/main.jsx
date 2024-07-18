import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Importações corretas do react-router-dom
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Inicio from "./Pages/Início.jsx";

// Configuração das rotas usando createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/sobre",
    element: <Inicio />,
  },
]);

// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />

    <RouterProvider router={router} />
    <ContactUs/>
    <Footer/>
  </React.StrictMode>
);
