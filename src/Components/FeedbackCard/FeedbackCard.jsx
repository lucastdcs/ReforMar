import React from "react";
import StyledContainer from "./FeedbackCard.styled";
import Photo from "../../assets/imgs/FBimg.png";
import { H7, H6, Label, Text } from "../../assets/styles/typography.styled";
import Stars from "../../assets/icons/feedback_stars.svg";

const FeedbackCard = () => {
  return (
    <StyledContainer>
      <img src={Photo} className="fb_photo" />
      <H7 className="fb_name">Paso Import</H7>
      <Label className="fb_type">empresa</Label>
      <span className="fb_stars">
        <img src={Stars} />
      </span>
      <H6 className="fb_date">JUN/2024</H6>
      <Text className="fb_comentary">
        Empresa profissional e rápida. A equipe do Rodrigo é prestativa. Serviço
        excelente. Valeu o preço. Fiquei surpreendido e recomendo!
      </Text>
    </StyledContainer>
  );
};

export default FeedbackCard;
