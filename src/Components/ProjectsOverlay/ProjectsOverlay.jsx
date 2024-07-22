import React, { useState, useEffect } from "react";
import { StyledContainer, Overlay, StyledCard } from "./ProjectsOverlay.styled";
import Titles from "../../Components/Titles/Titles";
import Stars from "../Stars/Stars.jsx";
import Card from "../Card/Card.jsx";
import { H5 } from "../../assets/styles/typography.styled.js";
import Button from "../Button/Button.jsx";
import { LabelTitle, H4, Text } from "../../assets/styles/typography.styled.js";
import CardExample from "../../assets/imgs/CardExample.png";

const ProjectsOverlay = (props) => {
  const [isClosed, setIsClosed] = useState(false);

  const toggleOverlay = () => {
    setIsClosed(!isClosed);
    scrollTo(0, 0);
    console.log("cheguei");
  };
  return (
    <>
      {!isClosed ? (
        <StyledCard className={props.className}>
          <img src={props.img} alt="" />

          <div className="wrapper">
            <H5 className="title">{props.title}</H5>
            <Text className="text1">
              Área: {props.area} <br />
              Tipo: {props.type} <br />
              Localização: {props.location}
              <br />
            </Text>
            <Text className="text2">
              Desafio: <br />
              {props.description}
            </Text>
            <Button
              texto="Veja Detalhes"
              className="btn"
              onClick={toggleOverlay}
            />
          </div>
        </StyledCard>
      ) : (
        <StyledContainer>
          <Overlay>
            <button id="back" onClick={toggleOverlay}>
              <LabelTitle>Voltar</LabelTitle>
            </button>
            <Titles
              text_label="Nome do projeto:"
              text_title={props.title}
              text_span=""
            />
            <div className="all_details_wrapper">
              <div className="detail_wrapper">
                <LabelTitle>Área:</LabelTitle>
                <H4>{props.area}</H4>
              </div>
              <div className="detail_wrapper">
                <LabelTitle>Tipo:</LabelTitle>
                <H4>{props.type}</H4>
              </div>
              <div className="detail_wrapper">
                <LabelTitle>Localização:</LabelTitle>
                <H4>{props.location}</H4>
              </div>
              <div className="detail_wrapper">
                <LabelTitle>Feedback do cliente:</LabelTitle>
                <H4>
                  {props.feedbackStars}/5 <Stars />
                </H4>
              </div>
              <div className="detail_wrapper">
                <LabelTitle>Duração da obra:</LabelTitle>
                <H4>{props.duration}</H4>
              </div>
              <div className="detail_wrapper">
                <LabelTitle>ano da obra:</LabelTitle>
                <H4>{props.year}</H4>
              </div>
            </div>
            <div className="detail_wrapper description_wrapper">
              <LabelTitle>desafio e escopo:</LabelTitle>
              <Text>
              {props.description}
              </Text>
            </div>
            <Titles text_label="" text_title="Antes & Depois" text_span="" />
            <H4>Veja mais projetos</H4>
            <Card
              className="project_card"
              img={CardExample}
              title="Cuba de Cozinha"
              area="30m²"
              type="Residência"
              location="Santos - SP"
              description="Reforma de paredes, pisos, instalações de lustres e superfícies de mármore"
            />
          </Overlay>
        </StyledContainer>
      )}
    </>
  );
};

export default ProjectsOverlay;
