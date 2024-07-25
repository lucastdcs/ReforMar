import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ProjectsOverlay from "../ProjectsOverlay/ProjectsOverlay";
import { StyledCard } from "./Card.styled";
import Button from "../Button/Button";
import { H5 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";

const Card = (props) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/portfolio");
  };

  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    console.log("toggle ativado");
  };

  return (
    <div>
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
          onClick={props.overlay ? toggleOverlay : redirect}
        />
      </div>
    </StyledCard>
    {showOverlay && <ProjectsOverlay {...props} />}
  </div>
  );
};

export default Card;
