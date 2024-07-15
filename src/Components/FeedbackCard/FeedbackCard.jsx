import React from "react";
import StyledContainer from "./FeedbackCard.styled";
import Photo from "../../assets/imgs/FBimg.png";
import { H7, H6, Label } from "../../assets/styles/typography.styled";
import Stars from "../../assets/icons/feedback_stars.svg";

const FeedbackCard = () => {
  return (
    <StyledContainer>
      <img src={Photo} />
      <H7>Paso Import</H7>
      <Label>empresa</Label>
      <span>
        <img src={Stars} />
      </span>
      <H6>JUN/2024</H6>
      <H6>
        Empresa profissional e rápida. A equipe do Rodrigo é prestativa. Serviço
        excelente. Valeu o preço. Fiquei surpreendido e recomendo!
      </H6>
    </StyledContainer>
  );
};

export default FeedbackCard;
