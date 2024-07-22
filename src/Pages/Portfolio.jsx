import React from "react";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection";
import ValuesSection from "../Components/ValuesSection/ValuesSection";
import NumbersSection from "../Components/NumbersSection/NumbersSection";
import Titles from "../Components/Titles/Titles";
import styled from "styled-components";
import img1 from "../assets/imgs/ServicesImg.jpg";
import img2 from "../assets/imgs/ObrasIMG2.jpg";
import img3 from "../assets/imgs/ObrasIMG3.jpg";

const Portfolio = () => {
  const Main = styled.main`
    width: 100vw;
    color: var(--black);
    text-align: center;
    margin-top: 22rem;
    height: fit-content;
  `;
  const Grid = styled.div`
    max-width: 180rem;
    max-height: 60rem;
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
    grid-gap: 1rem;
    margin: 8rem auto;
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
      <ValuesSection />
      <NumbersSection />
      <FeedbackSection />
    </Main>
  );
};

export default Portfolio;
