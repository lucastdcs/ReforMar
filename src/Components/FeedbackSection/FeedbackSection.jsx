import React from "react";
import { StyledContainer } from "./FeedbackSection.styled";
import Titles from "../Titles/Titles";
import Carousel from "../Carrousel/Carousel";
import CarouselNew from "../MotionCarousel/MotionCarousel";
import FeedbackCard from "../FeedbackCard/FeedbackCard";
import Button from "../Button/Button";
import Photo from "../../assets/imgs/FBimg.png";
import Eder from "../../assets/imgs/Elder.jpg";

import Vanessa from "../../assets/imgs/Vanessa.jpg";
import Luciana from "../../assets/imgs/Luciana.jpg";

const FeedbackSection = () => {
  return (
    <StyledContainer>
      <Titles
        text_label="feedback de clientes"
        text_title="Ouça de nossos"
        text_span="clientes satisfeitos!"
      />

      <CarouselNew>
        <FeedbackCard photo={Photo} name="Paso Import" type="empresa" date="JUN/2024" text="Empresa profissional e rápida. A equipe do Rodrigo é prestativa. Serviço
        excelente. Valeu o preço. Fiquei surpreendido e recomendo!"/>
        <FeedbackCard photo={Eder} name="Eder Espacini" type="técnico" date="JUN/2024" text="Foi um ótimo atendimento, rápido, preciso e de qualidade. a equipe de Rodrigo foi excelente!"/>
        <FeedbackCard photo={Luciana} name="Luciana Rocha" type="-" date="MAR/2024" text="Ótima empresa! Profissionalismo nota 10. Equipe do Rodrigo Vitor me deram todo suporte antes, durante e depois."/>
        <FeedbackCard photo={Vanessa} name="Vanessa Oliveira" type="-" date="JUN/2024" text="Foram rápidos para atender a minha demanda, e trabalho feito com excelência."/>

      </CarouselNew>

      <Button texto="Entre em contato" destino="contato"/>
    </StyledContainer>
  );
};

export default FeedbackSection;
