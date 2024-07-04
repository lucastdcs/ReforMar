import React from "react";
import styled from "styled-components";
import { StyledCard } from "./Card.styled";
import Button from "../Button/Button";
import { H5 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";

const Card = (props) => {
  return (
    <>
      <StyledCard>
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
          <Button texto="Veja Detalhes" className="btn"/>
        </div>
      </StyledCard>
    </>
  );
};

export default Card;
