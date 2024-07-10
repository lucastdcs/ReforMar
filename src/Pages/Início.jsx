import React from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header.jsx";
import Card from "../Components/Card/Card.jsx";
import backgroundImg from "../assets/imgs/Hero-Img.png";
import CardExample from "../assets/imgs/CardExample.png";
import Titles from "../Components/Titles/Titles.jsx";
import ServicesCard from "../Components/ServicesCard/ServicesCard.jsx";
import { H2 } from "../assets/styles/typography.styled.js";
import { Text } from "../assets/styles/typography.styled.js";
import { LabelTitle } from "../assets/styles/typography.styled.js";
import Button from "../Components/Button/Button.jsx";
import Badges from "../Components/Badges/Badges.jsx";
import Carousel from "../Components/Carrousel/Carousel.jsx";
import Kitchen from "../assets/icons/services_kitchen.svg";
import Bath from "../assets/icons/services_bath.svg";
import Barbecue from "../assets/icons/services_barbecue.svg";
import Laundry from "../assets/icons/services_laundry.svg";
import Porch from "../assets/icons/services_porch.svg";

const Inicio = () => {
  const StyledContainer = styled.section`
    position: relative;
    width: 100vw;
    padding-bottom: 10rem;
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    text-align: center;
    width: 100vw;
    padding: 6rem 0;

    h3 {
      margin: 0 2rem;
    }
  `;

  const StyledContainer3 = styled.section`
    width: 100vw;
    color: var(--black);
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 10rem;

    .project_title {
      text-align: start;
      margin-left: 10%;
    }
  `;
  const StyledContainer4 = styled.section`
    width: 100vw;
    color: var(--black);
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 10rem;

    .project_title {
      text-align: start;
      margin-left: 10%;
    }
  `;

  const ServicesGrid = styled.div`
    margin: auto;
    margin-top: 8rem;
    display: grid;
    width: 65vw;
    max-width: 120rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 2rem;

    :last-child {
      grid-column: span 2;
    }
    
    @media (max-width: 1540px){
      grid-template-columns: 1fr;
      justify-items: center;
      :last-child {
        grid-column: span 1;
      }
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
      <StyledContainer3>
        <Titles
          text_label="Projetos de Sucesso"
          text_title="Projetos"
          text_span="Exclusivos"
        />
        <Carousel>
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
          />
        </Carousel>
      </StyledContainer3>
      <StyledContainer4>
        <Titles
          text_label="Nossos serviços"
          text_title="Serviços para seu"
          text_span="novo lar"
        />
        <ServicesGrid>
          <ServicesCard
            icon={Kitchen}
            title="Cozinhas & Copa"
            text="Transformamos sua cozinha em um espaço funcional e moderno. Instalamos
          pias, torneiras e realizamos pinturas para dar vida nova ao ambiente,
          tornando-o perfetio para suas necessidades diárias."
          />
          <ServicesCard
            icon={Bath}
            title="Banheiros & Lavabos"
            text="Renove seu banheiro com praticidade. Instalamos acessórios, realizamos pinturas e pequenas reformas para garantir um ambiente elegante e funcional."
          />
          <ServicesCard
            icon={Laundry}
            title="Lavanderias & Serviços"
            text="Deixe sua lavanderia mais eficiente e organizada. Realizamos instalação de tanques, prateleiras e serviços de pintura para criar um espaço prático e agradável."
          />
          <ServicesCard
            icon={Barbecue}
            title="Área Gourmet & Churrasqueiras"
            text="Transforme sua área de lazer em um local perfeito para reunir amigos e familiares. Instalamos churrasqueiras, bancadas e realizamos pinturas para criar um ambiente convidativo e acolhedor."
          />
          <ServicesCard
            icon={Porch}
            title="Varandas"
            text="Amplie seus momentos de relaxamento e convívio ao ar livre. Realizamos pequenas reformas, instalação de pisos e serviços de pintura para transformar sua varanda em um espaço aconchegante e funcional."
          />
        </ServicesGrid>
      </StyledContainer4>
    </>
  );
};

export default Inicio;
