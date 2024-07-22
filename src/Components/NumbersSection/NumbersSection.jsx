import React from "react";
import {StyledContainer} from "./NumbersSection.styled";
import NumbersGrid from "../NumbersGrid/NumbersGrid";
import Titles from "../Titles/Titles";
import Button from "../Button/Button";

const NumbersSection = () => {
  return (
    <StyledContainer>
      <Titles text_label="" text_title="Nossos" text_span="Números:" />
      <NumbersGrid />
      <Button texto="Entre em contato" />
    </StyledContainer>
  );
};

export default NumbersSection;
