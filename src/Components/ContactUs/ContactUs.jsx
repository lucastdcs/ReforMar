import React from "react";
import Titles from "../Titles/Titles";
import {
  StyledSection,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledArchive,
  StyledLocations
} from "./ContactUs.styled";
import { Text } from "../../assets/styles/typography.styled";
import Button from "../Button/Button";

const ContactUs = () => {
  return (
    <StyledSection>
      <div className="form_wrapper">
        <div className="title_wrapper">
          <Titles
            text_label="contate-nos"
            text_title="Preparado para transformar sua casa no"
            text_span="seu lar?"
          />
          <Text>
            Escreva ao lado uma mensagem <br /> para nós e entraremos em
            contato!
          </Text>
          <Button texto="Veja outros contatos" variant="outline" />
        </div>
        <StyledForm>
          <StyledInput placeholder="Seu Nome" />
          <StyledInput placeholder="Seu E-mail" />
          <StyledTextArea placeholder="Qual a sua mensagem?" />
          <StyledArchive>
            <StyledInput placeholder="Anexar arquivo" type="file" />

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4403 11.0509L12.2503 20.2409C11.1244 21.3667 9.59747 21.9992 8.00529 21.9992C6.41311 21.9992 4.88613 21.3667 3.76029 20.2409C2.63445 19.1151 2.00195 17.5881 2.00195 15.9959C2.00195 14.4037 2.63445 12.8767 3.76029 11.7509L12.9503 2.5609C13.7009 1.81033 14.7188 1.38867 15.7803 1.38867C16.8417 1.38867 17.8597 1.81033 18.6103 2.5609C19.3609 3.31146 19.7825 4.32944 19.7825 5.3909C19.7825 6.45235 19.3609 7.47033 18.6103 8.2209L9.41029 17.4109C9.03501 17.7862 8.52602 17.997 7.99529 17.997C7.46456 17.997 6.95557 17.7862 6.58029 17.4109C6.20501 17.0356 5.99418 16.5266 5.99418 15.9959C5.99418 15.4652 6.20501 14.9562 6.58029 14.5809L15.0703 6.1009"
                stroke="#F8F8F8"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </StyledArchive>
          <Button type="submit" texto="Enviar"/>
        </StyledForm>
      </div>
      <StyledLocations>
      <Titles
            text_label="mapa"
            text_title="Locais de Atendimento"
            text_span=""
          />
      </StyledLocations>
    </StyledSection>
  );
};

export default ContactUs;
