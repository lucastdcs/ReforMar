import React from "react";
import { Text } from "../../assets/styles/typography.styled.js";
import { H4 } from "../../assets/styles/typography.styled.js";
import { StyledContainer } from "./Values.styled.js";

const Values = (props) => {
  return (
    <StyledContainer>
      <span><img src={props.icon}/></span>
      <H4>{props.title}</H4>
      <Text>{props.text}</Text>
    </StyledContainer>
  );
};

export default Values;
