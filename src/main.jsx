import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from "react-router-dom";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Inicio from "./Pages/Início.jsx";
import Sobre from "./Pages/Sobre.jsx";

// Imagens e ícones
import Logo from "./assets/icons/Logotipo.svg";
import LogoBlack from "./assets/icons/LogotipoBlack.svg";
import Instagram from "./assets/icons/instagram.svg";
import InstagramBlack from "./assets/icons/instagramBlack.svg";
import Whatsapp from "./assets/icons/whatsapp.svg";
import WhatsappBlack from "./assets/icons/whatsappBlack.svg";
import Youtube from "./assets/icons/youtube.svg";
import YoutubeBlack from "./assets/icons/youtubeBlack.svg";
import Menu from "./assets/icons/Nav-Menu.svg";
import MenuBlack from "./assets/icons/Nav-MenuBlack.svg";

const Layout = () => {
  const location = useLocation();

  const getHeaderProps = () => {
    if (location.pathname === "/") {
      return {
        textColor: "white",
        logo: Logo,
        instagramIcon: Instagram,
        whatsappIcon: Whatsapp,
        youtubeIcon: Youtube,
        menuIcon: Menu,
      };
    } else {
      return {
        textColor: "black",
        logo: LogoBlack,
        instagramIcon: InstagramBlack,
        whatsappIcon: WhatsappBlack,
        youtubeIcon: YoutubeBlack,
        menuIcon: MenuBlack,
      };
    }
  };

  return (
    <>
      <Header {...getHeaderProps()} />
      <Outlet />
      <ContactUs />
      <Footer />
    </>
  );
};

// Configuração das rotas usando createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Inicio /> },
      { path: "sobre", element: <Sobre /> },
    ],
  },
]);

// Renderizando o aplicativo
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
