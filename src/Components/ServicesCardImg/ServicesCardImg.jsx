import React from "react";
import { StyledServicesCard } from "./ServicesCardImg.styled";
import Button from "../Button/Button";
import { H4 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";

const ServicesCardImg = (props) => {
  return (
    <>
      <StyledServicesCard>
        <img className="example" src={props.img} alt="" />
        <span className="icon">
          <img src={props.icon} />
        </span>

        <H4 className="title">{props.title}</H4>
        <Text className="description">{props.text}</Text>

        <Button className="btn" texto="Entre em contato" variant="outline" />
        <Button className="btn2" texto="Veja nosso portfólio" />
      </StyledServicesCard>
    </>
  );
};

export default ServicesCardImg;
