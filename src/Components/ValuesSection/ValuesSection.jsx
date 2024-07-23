import React from "react";
import { StyledContainer, ValuesGrid } from "./ValuesSection.styled";
import Values from "../Values/Values";
import Titles from "../Titles/Titles";
import Button from "../Button/Button";
import Agile from "../../assets/icons/values_agile.svg";
import AgileWhite from "../../assets/icons/values_agile_white.svg";
import Colaborate from "../../assets/icons/values_collaborate.svg";
import ColaborateWhite from "../../assets/icons/values_collaborate_white.svg";
import Customer from "../../assets/icons/values_customer.svg";
import CustomerWhite from "../../assets/icons/values_customer_white.svg";
import Learning from "../../assets/icons/values_learning.svg";
import LearningWhite from "../../assets/icons/values_learning_white.svg";
import Quality from "../../assets/icons/values_quality.svg";
import QualityWhite from "../../assets/icons/values_quality_white.svg";

const ValuesSection = (props) => {
  const agileSrc = props.black_bg ? AgileWhite : Agile;
  const collaborateSrc = props.black_bg ? ColaborateWhite : Colaborate;
  const customerSrc = props.black_bg ? CustomerWhite : Customer;
  const learningSrc = props.black_bg ? LearningWhite : Learning;
  const qualitySrc = props.black_bg ? QualityWhite : Quality;
  return (
    <StyledContainer black_bg={props.black_bg}>
      <Titles
        text_label="Sobre nós"
        text_title="Nossos "
        text_span="Valores:"
      />

      <ValuesGrid text_color={props.text_color}>
        <Values
          className="agile"
          icon={agileSrc}
          title="Agilidade e Flexibilidade"
          text="Priorizamos a rapidez e adaptabilidade em cada projeto. Estamos sempre prontos para responder às necessidades do cliente de forma eficiente, garantindo que as soluções sejam entregues dentro do prazo e com flexibilidade para ajustes conforme necessário."
        />
        <Values
          className="customer"
          icon={customerSrc}
          title="Proposta focada no Cliente"
          text="Colocamos as necessidades e desejos do cliente no centro de tudo o que fazemos. Desde o planejamento até a conclusão do projeto, nossa equipe está comprometida em entender e atender às expectativas do cliente, garantindo sua total satisfação."
        />
        <Values
          className="quality"
          icon={qualitySrc}
          title="Excelência e Qualidade"
          text="Buscamos a excelência em cada detalhe. Desde a seleção dos materiais até a execução do trabalho, nos esforçamos para alcançar os mais altos padrões de qualidade. Nossa dedicação à excelência garante resultados duradouros e satisfatórios para nossos clientes."
        />
        <Values
          className="colaborate"
          icon={collaborateSrc}
          title="Integridade e Trasparência"
          text="Agimos com honestidade e transparência em todas as nossas interações. Mantemos uma comunicação aberta e honesta com nossos clientes, fornecendo informações claras sobre o processo, custos e prazos. Nossa integridade é a base de relacionamentos de confiança com os clientes."
        />
        <Values
          className="learning"
          icon={learningSrc}
          title="Aprendizado Contínuo"
          text="Estamos comprometidos com o aprimoramento constante. Buscamos sempre aprender com cada projeto, identificando áreas de melhoria e implementando novas técnicas e tecnologias. Nosso compromisso com o aprendizado contínuo nos permite oferecer serviços cada vez melhores aos nossos clientes."
        />
        <Button className="btn" texto="Veja Detalhes" />
      </ValuesGrid>
    </StyledContainer>
  );
};

export default ValuesSection;
