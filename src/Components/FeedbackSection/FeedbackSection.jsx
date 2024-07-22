import React from "react";
import { StyledContainer } from "./FeedbackSection.styled";
import Titles from "../Titles/Titles";
import Carousel from "../Carrousel/Carousel";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import Button from "../Button/Button";

const FeedbackSection = () => {
  return (
    <StyledContainer>
      <Titles
        text_label="feedback de clientes"
        text_title="Ouça de nossos"
        text_span="clientes satisfeitos!"
      />

      <Carousel>
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </Carousel>

      <Button texto="Entre em contato" />
    </StyledContainer>
  );
};

export default FeedbackSection;
