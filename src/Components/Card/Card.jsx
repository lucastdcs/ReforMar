import React from "react";
import styled from "styled-components";
import { StyledCard } from "./Card.styled";
import CardExample from "../../assets/imgs/CardExample.png";
import Button from "../Button/Button";
import { H5 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";

const Card = () => {
  return (
    <>
      <StyledCard>
        <img src={CardExample} alt="" />

        <div className="wrapper">
          <H5 className="title">Cuba de Cozinha</H5>
          <Text className="text1">
            Área:30m² <br />
            Tipo: Residência <br />
            Localização: Santos - SP
            <br />
          </Text>
          <Text className="text2">
            Desafio: <br />
            Reforma de paredes, pisos, instalações <br /> de lustres,
            superfícies de mármore.
          </Text>
          <Button texto="Veja Detalhes" className="btn"/>
        </div>
      </StyledCard>
    </>
  );
};

export default Card;
