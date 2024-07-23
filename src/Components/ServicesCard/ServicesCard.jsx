import React from "react";
import { StyledServicesCard } from "./ServicesCard.styled";
import Button from "../Button/Button";
import { H4 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";

const ServicesCard = (props) => {
  return (
    <>
      <StyledServicesCard>
        <span>
          <img src={props.icon} />
        </span>

        <H4>{props.title}</H4>
        <Text>{props.text}</Text>
        <div>
          <Button texto="Entre em contato" variantType="outline" />
          <Button texto="Veja nosso portfólio" />
        </div>
      </StyledServicesCard>
    </>
  );
};

export default ServicesCard;
