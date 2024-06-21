import React from "react";
import Logo from "../../assets/icons/Logotipo.svg";
import StyledHeader from "./Header.styled.js";

const Header = () => {
  return (
    <StyledHeader>
      <img src={Logo} alt="Logotipo" />
      <nav>
        <a href="/">Sobre Nós</a>
        <a href="/servicos">Serviços</a>
        <a href="/portfolio">Portfólio</a>
      </nav>
    </StyledHeader>
  );
};

export default Header;