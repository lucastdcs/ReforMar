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
import Values from "../Components/Values/Values.jsx";
import NumbersGrid from "../Components/NumbersGrid/NumbersGrid.jsx";
import Kitchen from "../assets/icons/services_kitchen.svg";
import Bath from "../assets/icons/services_bath.svg";
import Barbecue from "../assets/icons/services_barbecue.svg";
import Laundry from "../assets/icons/services_laundry.svg";
import Porch from "../assets/icons/services_porch.svg";
import Agile from "../assets/icons/values_agile.svg";
import Colaborate from "../assets/icons/values_collaborate.svg";
import Customer from "../assets/icons/values_customer.svg";
import Learning from "../assets/icons/values_learning.svg";
import Quality from "../assets/icons/values_quality.svg";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection.jsx";

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

  const StyledContainer5 = styled.section`
    width: 100vw;
    color: var(--black);
    text-align: center;
    height: max-content;

  `;

  const ValuesGrid = styled.div`
    margin: auto;
    max-width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.3fr 2fr auto 2fr;
    align-items: center;
    justify-items: center;
    grid-gap: 5rem;

    .agile {
      grid-column: 1 / span 2;
      grid-row: 2 / span 2;
    }

    .customer {
      grid-column: 3 / span 2;
      grid-row: 1 / span 2;
    }

    .quality {
      grid-column: 5 / span 2;
      grid-row: 2 / span 2;
    }

    .colaborate {
      grid-column: 2 / span 2;
      grid-row: 4 / span 2;
    }

    .learning {
      grid-column: 4 / span 2;
      grid-row: 4 / span 2;
    }

    .btn {
      grid-column: 3 / span 2;
      grid-row: 3;
    }

    @media (max-width: 1330px) {
      display: flex;
      flex-direction: column;
      max-width: 90vw;
    }
  `;
  const StyledContainer6 = styled.section`
    width: 100vw;
    color: var(--black);
    text-align: center;
    h2 {
      margin-top: 8rem;
    }
    margin-bottom: 13rem;
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
      <StyledContainer5>
        <Titles
          text_label="Sobre nós"
          text_title="Nossos "
          text_span="Valores:"
        />

        <ValuesGrid>
          <Values
            className="agile"
            icon={Agile}
            title="Agilidade e Flexibilidade"
            text="Priorizamos a rapidez e adaptabilidade em cada projeto. Estamos sempre prontos para responder às necessidades do cliente de forma eficiente, garantindo que as soluções sejam entregues dentro do prazo e com flexibilidade para ajustes conforme necessário."
          />
          <Values
            className="customer"
            icon={Customer}
            title="Proposta focada no Cliente"
            text="Colocamos as necessidades e desejos do cliente no centro de tudo o que fazemos. Desde o planejamento até a conclusão do projeto, nossa equipe está comprometida em entender e atender às expectativas do cliente, garantindo sua total satisfação."
          />
          <Values
            className="quality"
            icon={Quality}
            title="Excelência e Qualidade"
            text="Buscamos a excelência em cada detalhe. Desde a seleção dos materiais até a execução do trabalho, nos esforçamos para alcançar os mais altos padrões de qualidade. Nossa dedicação à excelência garante resultados duradouros e satisfatórios para nossos clientes."
          />
          <Values
            className="colaborate"
            icon={Colaborate}
            title="Integridade e Trasparência"
            text="Agimos com honestidade e transparência em todas as nossas interações. Mantemos uma comunicação aberta e honesta com nossos clientes, fornecendo informações claras sobre o processo, custos e prazos. Nossa integridade é a base de relacionamentos de confiança com os clientes."
          />
          <Values
            className="learning"
            icon={Learning}
            title="Aprendizado Contínuo"
            text="Estamos comprometidos com o aprimoramento constante. Buscamos sempre aprender com cada projeto, identificando áreas de melhoria e implementando novas técnicas e tecnologias. Nosso compromisso com o aprendizado contínuo nos permite oferecer serviços cada vez melhores aos nossos clientes."
          />
          <Button className="btn" texto="Veja Detalhes" />
        </ValuesGrid>
      </StyledContainer5>
      <StyledContainer6>
        <Titles text_label="" text_title="Nossos" text_span="Números:" />
        <NumbersGrid />
        <Button texto="Entre em contato" />
      </StyledContainer6>
      <FeedbackSection/>
    </>
  );
};

export default Inicio;
