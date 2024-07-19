import React from "react";
import styled from "styled-components";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection";
import ValuesSection from "../Components/ValuesSection/ValuesSection";
import Titles from "../Components/Titles/Titles";
import { Text } from "../assets/styles/typography.styled";
import Badges from "../Components/Badges/Badges";
import Guy from "../assets/imgs/AboutGuy.jpg";

const SobreNos = () => {
  const Main = styled.main`
    width: 100vw;
    margin-top: 20rem;
    color: var(--black);
  `;

  const StyledSection = styled.section`
    width: 100%;
    padding: 2rem;
  `;
  const Grid = styled.div`
    max-width: 155rem;
    height: fit-content;

    display: grid;
    grid-template-columns: 1fr 70rem;
    grid-template-rows: 8rem 2rem auto auto auto 8rem;
    grid-column-gap: 5vw;
    grid-row-gap: 2rem;
    justify-content: left;

    margin: auto;
    margin-bottom: 10rem;

    .small {
      grid-column: 1;
      grid-row: 2;
    }

    .big {
      grid-column: 1;
      grid-row: 3;
    }
    .about_description {
      grid-column: 1;
      grid-row: 4;
    }

    .about_badges {
      grid-column: 1;
      grid-row: 5;
    }

    .guy {
      grid-column: 2;
      grid-row: 1 / span 6;
    }

    .guy {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-top-right-radius: 3rem;
      border-top-left-radius: 3rem;
    }

    @media (max-width:1550px) {
      grid-template-columns: 1fr 60rem;
      grid-template-rows: 8rem 2rem auto auto auto 8rem;
    }

    @media (max-width:1200px) {
      grid-template-columns: auto;
      grid-template-rows: auto;

      
    .small {
      grid-column: 1;
      grid-row: 1;
    }

    .big {
      grid-column: 1;
      grid-row: 2;
    }
    .about_description {
      grid-column: 1;
      grid-row: 3;
    }

    .about_badges {
      grid-column: 1;
      grid-row: 4;
    }

    .guy {
      grid-column: 1;
      grid-row: 5;
    }
    }
  `;
  return (
    <Main>
      <StyledSection>
        <Grid>
          <Titles
            text_label="Quem somos"
            text_title="Espaços que refletem um"
            text_span="bom trabalho"
          />
          <Text className="about_description">
            Cada projeto é uma colaboração única entre nossa equipe e nossos
            clientes, resultando em espaços que refletem suas personalidades e
            atendem às suas necessidades diárias.
          </Text>
          <Badges className="about_badges" />
          <img className="guy" src={Guy} alt="" />
        </Grid>
      </StyledSection>
      <ValuesSection />
      <FeedbackSection />
    </Main>
  );
};

export default SobreNos;
