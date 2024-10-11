import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection";
import ValuesSection from "../Components/ValuesSection/ValuesSection";
import NumbersSection from "../Components/NumbersSection/NumbersSection";
import Titles from "../Components/Titles/Titles";
import { Text } from "../assets/styles/typography.styled";
import Card from "../Components/Card/Card.jsx";
import img1 from "../assets/imgs/ServicesImg.jpg";
import img2 from "../assets/imgs/ObrasIMG2.jpg";
import img3 from "../assets/imgs/ObrasIMG3.jpg";
import CarouselNew from "../Components/MotionCarousel/MotionCarousel.jsx";
import { getImagesFromFolder } from "../utils/getImagesfromFolder.js";
import { getBeforeAfterImagesFromFolder } from "../utils/getImagesfromFolder.js";

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
    bottom: -10rem;
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
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
    padding-top: 25rem;
    padding-bottom: 10rem;
    background-color: var(--black);
    color: var(--off-white);

    p {
      margin-top: 6rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
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

    @media (max-width: 1000px) {
      .portfolio_carousel_inner {
        width: 90vw;
      }
    }
  `;

  const [projects, setProjects] = useState([]);
  
  const getProjects = () => {
    for(let i= 0; i <= 5; i++){
      const imageUrls = getImagesFromFolder(`projeto${i}`, 5);
      const thumbnailUrl = new URL(
        `/src/assets/imgs/projeto${i}/thumbnail.jpg`,
        import.meta.url
      ).href;
      const beforeAndAfter = getBeforeAfterImagesFromFolder(`projeto${i}`);
      
      setProjects(prevProjects => {{
        imageUrls,
        thumbnailUrl,
        beforeAndAfter
      })
    }
  }
  
  useEffect(() => {
    getProjects()
  }, []);
  
  console.log("🚀 ~ Portfolio ~ projects:", projects)
  // const imageUrls1 = getImagesFromFolder("projeto1", 5);
  // const thumbnailUrl1 = new URL(
  //   "/src/assets/imgs/projeto1/thumbnail.jpg",
  //   import.meta.url
  // ).href;
  // const beforeAndAfter1 = getBeforeAfterImagesFromFolder("projeto1");

  // const imageUrls2 = getImagesFromFolder("projeto2", 5);
  // const beforeAndAfter2 = getBeforeAfterImagesFromFolder("projeto2");
  // const thumbnailUrl2 = new URL(
  //   "/src/assets/imgs/projeto2/thumbnail.jpg",
  //   import.meta.url
  // ).href;

  // const imageUrls3 = getImagesFromFolder("projeto3", 3);
  // const beforeAndAfter3 = getBeforeAfterImagesFromFolder("projeto3");
  // const thumbnailUrl3 = new URL(
  //   "/src/assets/imgs/projeto3/thumbnail.jpg",
  //   import.meta.url
  // ).href;

  // const imageUrls4 = getImagesFromFolder("projeto4", 3);
  // const beforeAndAfter4 = getBeforeAfterImagesFromFolder("projeto4");
  // const thumbnailUrl4 = new URL(
  //   "/src/assets/imgs/projeto4/thumbnail.jpg",
  //   import.meta.url
  // ).href;

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
            Cada projeto é uma colaboração única entre nossa equipe e nossos
            clientes, resultando em espaços que refletem suas personalidades e
            atendem às suas necessidades diárias.
          </Text>
        </div>
        <CarouselNew className="portfolio_carousel_inner">
          {/* <Card
            className="project_card"
            img={thumbnailUrl1}
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
            antes={beforeAndAfter1.antes}
            depois={beforeAndAfter1.depois}
          />
          <Card
            className="project_card"
            img={thumbnailUrl2}
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
            antes={beforeAndAfter2.antes}
            depois={beforeAndAfter2.depois}
          />
          <Card
            className="project_card"
            img={thumbnailUrl3}
            title="Varanda"
            feedbackStars="4"
            rating={4}
            duration="1 Semana"
            year="2023"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            overlay
            images={imageUrls3}
            antes={beforeAndAfter3.antes}
            depois={beforeAndAfter3.depois}
          />
          <Card
            className="project_card"
            img={thumbnailUrl4}
            title="Cozinha"
            feedbackStars="4"
            rating={4}
            duration="1 Semana"
            year="2023"
            area="30m²"
            type="Residência"
            location="Santos - SP"
            description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            overlay
            images={imageUrls4}
            antes={beforeAndAfter4.antes}
            depois={beforeAndAfter4.depois}
          /> */}
        </CarouselNew>
      </Projects>
      <ValuesSection />
      <NumbersSection />
      <FeedbackSection />
    </Main>
  );
};

export default Portfolio;
