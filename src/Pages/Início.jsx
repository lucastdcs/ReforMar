import React from "react";
import styled from "styled-components";
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

import CarouselNew from "../Components/MotionCarousel/MotionCarousel.jsx";
import Kitchen from "../assets/icons/services_kitchen.svg";
import Bath from "../assets/icons/services_bath.svg";
import Barbecue from "../assets/icons/services_barbecue.svg";
import Laundry from "../assets/icons/services_laundry.svg";
import Porch from "../assets/icons/services_porch.svg";

import FeedbackSection from "../Components/FeedbackSection/FeedbackSection.jsx";
import ValuesSection from "../Components/ValuesSection/ValuesSection.jsx";
import NumbersSection from "../Components/NumbersSection/NumbersSection.jsx";
import Transition from "../Components/Transitions/Transitions.jsx";

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
    margin-top: 30vh;
    margin-left: 15vw;
    max-width: 64rem;
    min-width: fit-content;
    padding: 0 2rem;

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
    /* width: 65vw; */
    max-width: 120rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 2rem;

    :last-child {
      grid-column: span 2;
    }

    @media (max-width: 1540px) {
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
        <ContentWrapper>
          <H2>
            Transforme <br /> seu <span>espaço</span>
          </H2>
          <Text>
            Inovação e excelência em reformas residenciais <br /> com ReforMar
            Obras Express!
          </Text>
          <Button texto="Veja nossos serviços" destino="servicos"/>
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
        <CarouselNew>
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            destino="portfolio"
          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            destino="portfolio"

          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            destino="portfolio"

          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            destino="portfolio"

          />
          <Card
            img={CardExample}
            title="Cuba de Cozinha"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            destino="portfolio"

          />
        </CarouselNew>
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
      <NumbersSection/>
      <ValuesSection/>
      <FeedbackSection/>
    </>
  );
};

export default Transition(Inicio);
