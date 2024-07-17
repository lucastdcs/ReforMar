import React from "react";
import { StyledContainer, Legal } from "./Footer.styled";
import instagram from "../../assets/icons/instagram.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import youtube from "../../assets/icons/youtube.svg";
import logo from "../../assets/icons/logo-simbolo.svg";
import { Text } from "../../assets/styles/typography.styled";

const Footer = () => {
  return (
    <>
      <StyledContainer>
        <div className="wrapper">
          <div className="socials_wrapper">
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
            <img src={logo} alt="" />
          </div>
          <ul>
            <li className="list_title">
              <Text>Empresa</Text>
            </li>
            <li>
              <Text>Sobre Nós</Text>
            </li>
            <li>
              <Text>Serviços</Text>
            </li>
            <li>
              <Text>Contatos</Text>
            </li>
          </ul>
          <ul>
            <li className="list_title">
              <Text>Legal</Text>
            </li>
            <li>
              <Text>Política e Privacidade</Text>
            </li>
            <li>
              <Text>Termos de uso</Text>
            </li>
          </ul>
          <ul>
            <li className="list_title">
              <Text>Contatos</Text>
            </li>
            <li>
              <Text>atendimento@reformarobrasexpress.com.br</Text>
            </li>
            <li>
              <Text>(11) 93961-2000</Text>
            </li>
            <li>
              <Text>(13) 98220-2000</Text>
            </li>
            <li>
              <Text>São Paulo - SP</Text>
            </li>
            <li>
              <Text>São Vicente - SP</Text>
            </li>
          </ul>
        </div>
      </StyledContainer>
      <Legal>
        <Text>© 2024 ReforMar Obras Express. All rights reserved.</Text>
      </Legal>
    </>
  );
};

export default Footer;
