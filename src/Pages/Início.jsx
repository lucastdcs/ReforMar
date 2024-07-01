import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header.jsx";
import backgroundImg from "../assets/imgs/Hero-Img.png";

const Inicio = () => {
  const StyledContainer = styled.div`
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
`;

  return (
    <StyledContainer>
      <Header />
    </StyledContainer>
  );
};

export default Inicio;