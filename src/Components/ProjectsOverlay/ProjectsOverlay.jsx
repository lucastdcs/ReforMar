import React from "react";
import { StyledContainer, Overlay } from "./ProjectsOverlay.styled";
import Titles from "../../Components/Titles/Titles";
import { LabelTitle, H4, Text } from "../../assets/styles/typography.styled.js";

const ProjectsOverlay = () => {
  return (
    <StyledContainer>
      <Overlay>
        <Titles
          text_label="Nome do projeto:"
          text_title="Cuba de Cozinha"
          text_span=""
        />
        <div className="all_details_wrapper">
          <div className="detail_wrapper">
            <LabelTitle>Área:</LabelTitle>
            <H4>30m²</H4>
          </div>
          <div className="detail_wrapper">
            <LabelTitle>Tipo:</LabelTitle>
            <H4>Residência</H4>
          </div>
          <div className="detail_wrapper">
            <LabelTitle>Localização:</LabelTitle>
            <H4>Santos - SP</H4>
          </div>
          <div className="detail_wrapper">
            <LabelTitle>Feedback do cliente:</LabelTitle>
            <H4>4/5</H4>
          </div>
          <div className="detail_wrapper">
            <LabelTitle>Duração da obra:</LabelTitle>
            <H4>1 Semana</H4>
          </div>
          <div className="detail_wrapper">
            <LabelTitle>ano da obra:</LabelTitle>
            <H4>2023</H4>
          </div>
        </div>
        <div className="detail_wrapper description_wrapper">
          <LabelTitle>desafio e escopo:</LabelTitle>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            tempore sequi culpa assumenda quae corrupti illum dicta, ipsum aut
            earum cumque asperiores voluptate quidem hic eaque vero veritatis
            vel! Perspiciatis?
          </Text>
        </div>
      </Overlay>
    </StyledContainer>
  );
};

export default ProjectsOverlay;
