import React from "react";
import Logo from "../../assets/icons/Logotipo.svg";
import LogoPequeno from "../../assets/icons/LogotipoSmall.svg";
import StyledHeader from "./Header.styled.js";
import { StyledNav } from "./Header.styled.js";
import { Label } from "../../assets/styles/typography.styled.js";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import youtube from "../../assets/icons/youtube.svg";
import Button from "../Button/Button.jsx";

const Header = () => {
  return (
    <StyledHeader>
      <div className="wrapper">
        <img src={Logo} alt="Logotipo" id="logo" />
        <img src={LogoPequeno} alt="Logotipo" id="logo_pequeno" />
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
      <div className="wrapper2">
        <StyledNav className="active">
          <ul>
            <li>
              <Label>Sobre Nós</Label>
            </li>
            <li>
              <Label>Serviços</Label>
            </li>
            <li>
              <Label>Portfólio</Label>
            </li>
            <li>
              <Label>Contatos</Label>
            </li>
          </ul>
        </StyledNav>
        <Button texto="Entre em contato" />
      </div>
    </StyledHeader>
  );
};

export default Header;
