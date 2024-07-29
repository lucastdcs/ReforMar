import React from "react";
import styled from "styled-components";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection";
import ValuesSection from "../Components/ValuesSection/ValuesSection";
import NumbersSection from "../Components/NumbersSection/NumbersSection";
import Titles from "../Components/Titles/Titles";
import { Text } from "../assets/styles/typography.styled";
import Transition from "../Components/Transitions/Transitions.jsx";
import Card from "../Components/Card/Card.jsx";
import img1 from "../assets/imgs/ServicesImg.jpg";
import img2 from "../assets/imgs/ObrasIMG2.jpg";
import img3 from "../assets/imgs/ObrasIMG3.jpg";
import CarouselNew from "../Components/MotionCarousel/MotionCarousel.jsx";
import getImagesFromFolder from "../utils/getImagesfromFolder.js";

const Portfolio = () => {
  const Main = styled.main`
    width: 100vw;
    color: var(--black);
    text-align: center;
    margin-top: 22rem;
    height: fit-content;

    :nth-child(7) {
      margin-top: 5rem;
    }
  `;
  const Grid = styled.div`
    position: relative;
    bottom: -14rem;
    max-width: 180rem;
    max-height: 60rem;
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-gap: 1rem;
    margin: auto;
    padding: 1rem;

    img {
      border-radius: 3rem;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .img1 {
      grid-column: 1;
      grid-row: 1;
    }

    .img2 {
      grid-column: 2;
      grid-row: 1;
    }

    .img3 {
      grid-column: 3;
      grid-row: 1;
    }

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(20rem, 3);
      max-height: fit-content;

      img {
        height: 20rem;
      }
      .img1 {
        grid-column: 1;
        grid-row: 1;
      }

      .img2 {
        grid-column: 1;
        grid-row: 2;
      }

      .img3 {
        grid-column: 1;
        grid-row: 3;
      }
    }
  `;
  const Projects = styled.section`
    width: 100vw;
    height: fit-content;
    padding-top: 30rem;
    padding-bottom: 10rem;
    background-color: var(--black);
    color: var(--off-white);

    p {
      margin: 6rem 0;
    }

    .text_wrapper {
      max-width: 90rem;
      margin: auto;
    }
    .project_card {
      text-align: left;
      border: 1px solid var(--off-white);
      max-width: 130rem;
      border-radius: 4rem;
      /* height: fit-content; */
      p {
        margin: 0;
      }
    }
  `;

  const imageUrls1 = getImagesFromFolder("projeto1");
  const imageUrls2 = getImagesFromFolder("projeto2");

  return (
    <Main>
      <Titles
        text_label="Portfólio"
        text_title="Obras que inspiram"
        text_span=""
      />

      <Grid>
        <img src={img1} alt="" className="img1" />
        <img src={img2} alt="" className="img2" />
        <img src={img3} alt="" className="img3" />
      </Grid>
      <Projects>
        <div className="text_wrapper">
          <Titles
            text_label=""
            text_title="Projetos do Início ao Magnífico"
            text_span=""
          />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem doloribus provident autem ducimus maxime eligendi
            recusandae iure corrupti molestiae expedita amet vel, nihil cum a
            magni. Voluptate voluptatem consequuntur pariatur.
          </Text>
        </div>
        <CarouselNew>
          <Card
            className="project_card"
            img={`/src/assets/imgs/projeto1/thumbnail.jpg`}
            title="Cuba de Cozinha"
            feedbackStars="4"
            rating={4}
            duration="1 Semana"
            year="2023"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            overlay
            images={imageUrls1}
            antes={`/src/assets/imgs/projeto1/antes.jpg`}
            depois={`/src/assets/imgs/projeto1/depois.jpg`}
            
          />
          <Card
            className="project_card"
            img={`/src/assets/imgs/projeto2/thumbnail.jpg`}
            title="Banheiro em mármore e ripado"
            feedbackStars="4"
            rating={4}
            duration="1 Semana"
            year="2023"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            overlay
            images={imageUrls2}
            antes={`/src/assets/imgs/projeto2/antes.jpg`}
            depois={`/src/assets/imgs/projeto2/depois.jpg`}
          />
        </CarouselNew>
      </Projects>
      <ValuesSection />
      <NumbersSection />
      <FeedbackSection />
    </Main>
  );
};

export default Transition(Portfolio);
