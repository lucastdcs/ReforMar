import React from "react";
import { StyledContainer, Overlay } from "./ProjectsOverlay.styled";
import Titles from "../../Components/Titles/Titles";
import Stars from "../Stars/Stars.jsx";
import Card from "../Card/Card.jsx";
import Button from "../Button/Button.jsx";
import { LabelTitle, H4, Text } from "../../assets/styles/typography.styled.js";
import CardExample from "../../assets/imgs/CardExample.png";
import CarouselNew from "../MotionCarousel/MotionCarousel.jsx";
import ReactDOM from 'react-dom';

const ProjectsOverlay = (props) => {
  if (typeof document === 'undefined') {
    return null;
  }
  return ReactDOM.createPortal(
    <StyledContainer>
      <Overlay>
        <button id="back" onClick={props.onClick}>
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
          <Text>{props.description}</Text>
        </div>
        <Titles text_label="" text_title="Antes & Depois" text_span="" />
        <div className="preview">
          <CarouselNew>
            <img src={props.antes} alt="" />
            <img src={props.depois} alt="" />
          </CarouselNew>
        </div>

        <Titles text_label="" text_title="Mais fotos" text_span="" />

        <div className="photos_grid">
        {props.images && props.images.map((image, index) => (
            <img key={index} src={image} alt={`Overlay Image ${index + 1}`} className={`_img${index + 1}`} />
          ))}
        </div>

        <Button texto="Entre em contato" />

        <div className="more">
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
        </div>
      </Overlay>
    </StyledContainer>,
    document.body
  );
};

export default ProjectsOverlay;
