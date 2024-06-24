import React from "react";
import Logo from "../../assets/icons/Logotipo.svg";
import StyledHeader from "./Header.styled.js";
import { Label } from "../../assets/styles/typography.styled.js";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import youtube from "../../assets/icons/youtube.svg";
import Button from "../Button/Button.jsx";
const Header = () => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <img src={Logo} alt="Logotipo" />
        <span>
          <a href="">
            <img src={instagram} alt="" />
          </a>
          <a href="">
            <img src={youtube} alt="" />
          </a>
          <a href="">
            <img src={whatsapp} alt="" />
          </a>
        </span>
      </div>
      <nav>
        <Label>Sobre Nós</Label>
        <Label>Serviços</Label>
        <Label>Portfólio</Label>
        <Label>Contatos</Label>
        <Button></Button>
      </nav>
    </StyledHeader>
  );
};

export default Header;
