import React from "react";
import styled from "styled-components";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection";
import Titles from "../Components/Titles/Titles";

const Sobre = () => {
    const StyledMain = styled.main`
        margin-top: 20rem;
        color: var(--black);
        text-align: center;

        section {
            margin-top: 10rem;
        }
    `;


  return (
    <StyledMain>
      <Titles
        text_label="Nossos serviços"
        text_title="Serviços para seu"
        text_span="novo lar"
      />
      <FeedbackSection />
    </StyledMain>
  );
};

export default Sobre;
