import React from "react";
import { StyledContainer } from "./FeedbackSection.styled";
import Titles from "../Titles/Titles";
import Carousel from "../Carrousel/Carousel";
import CarouselNew from "../MotionCarousel/MotionCarousel";
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

      <CarouselNew>
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </CarouselNew>

      <Button texto="Entre em contato" />
    </StyledContainer>
  );
};

export default FeedbackSection;
