import React from "react";
import Logo from '../../assets/icons/Logotipo.svg';

const Header = () => {
    return (
      <Header>
        <img src={Logo} alt="" />
        <nav>
          <a href="/">Sobre Nós</a>
          <a href="/sobre">Serviços</a>
          <a href="/contato">Portfólio</a>
        </nav>
      </Header>
    );
  };
  
  export default Header;