import React from "react";
import Titles from "../Titles/Titles";
import {
  StyledSection,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledArchive,
  StyledLocations,
  StyledLocationsCard,
} from "./ContactUs.styled";
import { Text, H3 } from "../../assets/styles/typography.styled";
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
          <Button texto="Veja outros contatos" variantType="outline" />
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
          <Button type="submit" texto="Enviar" />
        </StyledForm>
      </div>
      <StyledLocations className="locations_wrapper">
        <Titles
          text_label="mapa"
          text_title="Locais de Atendimento"
          text_span=""
        />
        <StyledLocationsCard>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0001 0C16.5933 0 7.31348 9.27979 7.31348 20.6867C7.31348 24.4419 8.99761 28.4807 9.06819 28.651C9.61213 29.9421 10.6854 31.9475 11.4593 33.123L25.6431 54.614C26.2235 55.495 27.0826 56 28.0001 56C28.9176 56 29.7768 55.495 30.3572 54.6152L44.5422 33.123C45.3173 31.9475 46.3894 29.9421 46.9333 28.651C47.0039 28.4819 48.6868 24.4431 48.6868 20.6867C48.6868 9.27979 39.407 0 28.0001 0ZM44.6894 27.7067C44.2039 28.864 43.2048 30.7294 42.51 31.7832L28.325 53.2754C28.0452 53.7001 27.9563 53.7001 27.6764 53.2754L13.4915 31.7832C12.7967 30.7294 11.7976 28.8628 11.3121 27.7055C11.2914 27.6556 9.7472 23.9381 9.7472 20.6867C9.7472 10.622 17.9355 2.43372 28.0001 2.43372C38.0648 2.43372 46.2531 10.622 46.2531 20.6867C46.2531 23.943 44.7052 27.6702 44.6894 27.7067Z"
              fill="#F8F8F8"
            />
            <path
              d="M28.0001 9.73633C21.9608 9.73633 17.0483 14.65 17.0483 20.6881C17.0483 26.7262 21.9608 31.6398 28.0001 31.6398C34.0394 31.6398 38.9519 26.7262 38.9519 20.6881C38.9519 14.65 34.0394 9.73633 28.0001 9.73633ZM28.0001 29.2061C23.3042 29.2061 19.4821 25.3852 19.4821 20.6881C19.4821 15.991 23.3042 12.1701 28.0001 12.1701C32.696 12.1701 36.5181 15.991 36.5181 20.6881C36.5181 25.3852 32.696 29.2061 28.0001 29.2061Z"
              fill="#F8F8F8"
            />
          </svg>
          <H3>São Paulo</H3>
          <Text>São Paulo Capital e Região Metropolitana</Text>
          <Button texto="Contate agora" />
        </StyledLocationsCard>
        <StyledLocationsCard>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28.0001 0C16.5933 0 7.31348 9.27979 7.31348 20.6867C7.31348 24.4419 8.99761 28.4807 9.06819 28.651C9.61213 29.9421 10.6854 31.9475 11.4593 33.123L25.6431 54.614C26.2235 55.495 27.0826 56 28.0001 56C28.9176 56 29.7768 55.495 30.3572 54.6152L44.5422 33.123C45.3173 31.9475 46.3894 29.9421 46.9333 28.651C47.0039 28.4819 48.6868 24.4431 48.6868 20.6867C48.6868 9.27979 39.407 0 28.0001 0ZM44.6894 27.7067C44.2039 28.864 43.2048 30.7294 42.51 31.7832L28.325 53.2754C28.0452 53.7001 27.9563 53.7001 27.6764 53.2754L13.4915 31.7832C12.7967 30.7294 11.7976 28.8628 11.3121 27.7055C11.2914 27.6556 9.7472 23.9381 9.7472 20.6867C9.7472 10.622 17.9355 2.43372 28.0001 2.43372C38.0648 2.43372 46.2531 10.622 46.2531 20.6867C46.2531 23.943 44.7052 27.6702 44.6894 27.7067Z"
              fill="#F8F8F8"
            />
            <path
              d="M28.0001 9.73633C21.9608 9.73633 17.0483 14.65 17.0483 20.6881C17.0483 26.7262 21.9608 31.6398 28.0001 31.6398C34.0394 31.6398 38.9519 26.7262 38.9519 20.6881C38.9519 14.65 34.0394 9.73633 28.0001 9.73633ZM28.0001 29.2061C23.3042 29.2061 19.4821 25.3852 19.4821 20.6881C19.4821 15.991 23.3042 12.1701 28.0001 12.1701C32.696 12.1701 36.5181 15.991 36.5181 20.6881C36.5181 25.3852 32.696 29.2061 28.0001 29.2061Z"
              fill="#F8F8F8"
            />
          </svg>
          <H3>São Vicente</H3>
          <Text>São Vicente, Baixada Santista e Região</Text>
          <Button texto="Contate agora" />
        </StyledLocationsCard>
      </StyledLocations>
    </StyledSection>
  );
};

export default ContactUs;
