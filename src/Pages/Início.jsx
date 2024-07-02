import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header.jsx";
import backgroundImg from "../assets/imgs/Hero-Img.png";
import { H2 } from "../assets/styles/typography.styled.js";
import { Text } from "../assets/styles/typography.styled.js";
import { LabelTitle } from "../assets/styles/typography.styled.js";
import Button from "../Components/Button/Button.jsx";
import Badges from "../Components/Badges/Badges.jsx";

const Inicio = () => {
  const StyledContainer = styled.section`
    position: relative;
    width: 100vw; /* Garante que ocupe toda a largura da viewport */
    height: 100vh; /* Ajuste conforme necessário para a altura desejada */
    overflow: hidden; /* Para garantir que a imagem não cause overflow */
    display: flex;
    flex-direction: column; /* Centraliza os elementos verticalmente */
    align-items: center; /* Centraliza os elementos horizontalmente */
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    h2 {
      max-width: 64rem;
    }

    h2 span {
      color: var(--color-tertiary);
    }

    p {
      margin: 4rem 0 6rem 0;
    }

    @media (max-width: 1060px) {
      p {
        margin: 2rem 0 4rem 0;
      }
    }
    @media (max-width: 480px) {
      background-position: 70% center;
    }
  `;

  const ContentWrapper = styled.div`
    align-self: flex-start;
    margin-top: 15vh; /* Ajusta a margem superior com base na altura da viewport */
    margin-left: 15vw; /* Ajusta a margem esquerda com base na largura da viewport */
    max-width: 64rem; /* Define a largura máxima do conteúdo */
    padding: 0 2rem; /* Adiciona algum espaçamento lateral conforme necessário */

    @media (max-width: 480px) {
      position: absolute;
      /* margin-top: 70%; */
      bottom: 5rem;
      margin-left: 5vw;
    }
  `;

  const StyledContainer2 = styled.section`
    color: var(--grey);
    text-align: center;
    width: 100vw;
    padding: 6rem 0;

    h3{
      text-shadow: 1px 2px 5px var(--grey-shadow);
      margin: 0 2rem;
    }
  
  `;

  return (
    <>
      <StyledContainer>
        <Header />
        <ContentWrapper>
          <H2>
            Transforme seu <span>espaço</span>
          </H2>
          <Text>
            Inovação e excelência em reformas residenciais <br /> com ReforMar
            Obras Express!
          </Text>
          <Button texto="Veja nossos serviços" />
        </ContentWrapper>
      </StyledContainer>
      <StyledContainer2>
        <LabelTitle primary>Alguns de nossos certificados</LabelTitle>
        <Badges />
      </StyledContainer2>
    </>
  );
};

export default Inicio;
