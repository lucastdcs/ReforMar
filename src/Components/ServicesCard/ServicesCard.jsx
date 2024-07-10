import React from "react";
import { StyledServicesCard } from "./ServicesCard.styled";
import Button from "../Button/Button";
import { H4 } from "../../assets/styles/typography.styled";
import { Text } from "../../assets/styles/typography.styled";
import Kitchen from "../../assets/icons/services_kitchen.svg";

const ServicesCard = (props) => {
  return (
    <>
      <StyledServicesCard>
        <span>
          <img src={Kitchen} />
        </span>

        <H4>Cozinhas & Copa</H4>
        <Text>
          Transformamos sua cozinha em um espaço funcional e moderno. Instalamos
          pias, torneiras e realizamos pinturas para dar vida nova ao ambiente,
          tornando-o perfetio para suas necessidades diárias.
        </Text>
        <div className="">
          <Button texto="Entre em contato" variant="outline" />
          <Button texto="Veja nosso portfólio" />
        </div>
      </StyledServicesCard>
    </>
  );
};

export default ServicesCard;
