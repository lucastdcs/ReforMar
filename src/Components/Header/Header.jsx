import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import LogoPequeno from "../../assets/icons/LogotipoSmall.svg";
import StyledHeader from "./Header.styled.js";
import { StyledNav } from "./Header.styled.js";
import { StyledNavButton } from "./Header.styled.js";
import { Label } from "../../assets/styles/typography.styled.js";

import Button from "../Button/Button.jsx";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };
  

  return (
    <StyledHeader text_color={props.text_color}>
      <div className="wrapper">
        <a href="/">
          <img src={props.logo} alt="Logotipo" id="logo" />
        <img src={LogoPequeno} alt="Logotipo" id="logo_pequeno" />
        </a>
        <span>
          <a href="https://www.instagram.com/reformarobras/">
            <img src={props.instagramIcon} alt="Logo do Instagram" />
          </a>
          <a href="https://www.youtube.com/@reformarobrasexpress">
            <img src={props.youtubeIcon} alt="Logo do Youtube" />
          </a>
          <a href="">
            <img src={props.whatsappIcon} alt="Logo do Whatsapp" />
          </a>
        </span>
      </div>
      <div className="wrapper2">
        <StyledNav className={menuActive ? "active" : ""}>
          <div className="back-arrow" onClick={closeMenu}></div>
          <ul  id={menuActive ? "" : "active"}>
            <li>
              <Label href="/sobreNos">Sobre Nós</Label>
            </li>
            <li>
              <Label href="/servicos">Serviços</Label>
            </li>
            <li>
              <Label href="/portfolio">Portfólio</Label>
            </li>
            <li>
              <Label href="/contato">Contatos</Label>
            </li>
          </ul>
        </StyledNav>
        <Button texto="Entre em contato" destino="contato"/>
        <StyledNavButton id="nav_menu" onClick={toggleMenu}>
          <img src={props.menuIcon} alt="" />
        </StyledNavButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
