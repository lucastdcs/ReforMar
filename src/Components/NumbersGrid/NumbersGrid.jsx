import React from "react";
import { StyledNumbersGrid } from "./NumbersGrid.styled";
import NumbersCard from "../NumbersCard/NumbersCard";

const NumbersGrid = () => {
  return (
    <StyledNumbersGrid>
      <NumbersCard item="card1" number="9+">
        Colaboradores <br /> no Time
      </NumbersCard>
      <NumbersCard item="card2" number="2+ anos" align="right">
        No mercado
      </NumbersCard>
      <NumbersCard
        item="card3"
        number="91% dos clientes"
        align="right"
        size="h2"
      >
        Nos recomendam
      </NumbersCard>
      <NumbersCard item="card4" number="25+">
        Projetos lançados
      </NumbersCard>
    </StyledNumbersGrid>
  );
};

export default NumbersGrid
