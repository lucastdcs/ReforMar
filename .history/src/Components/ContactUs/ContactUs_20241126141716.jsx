import React from "react";
import Titles from "../Titles/Titles";
import {
  StyledSection,
  StyledLocations,
  StyledLocationsCard,
} from "./ContactUs.styled";
import { Text, H3 } from "../../assets/styles/typography.styled";
import Button from "../Button/Button";
import Form from "../Form/Form";

const ContactUs = (props) => {
  const isPage = props.isPage;

  return (
    <StyledSection style={isPage ? {paddingTop:'25rem'}: {paddingTop:'10rem'}}>
      <div className="form_wrapper">
        <div className="title_wrapper">
          {isPage ? (
            <>
              <Titles
                text_label="contate-nos"
                text_title="Vamos entender seu projeto"
                text_span=""
              />
              <Text>
                <strong>Ou contate-nos</strong> <br />
                <strong>Email:</strong> <br />
                atendimento@reformarobrasexpress.com.br <br />
                <strong>Telefones:</strong> <br />
                (11) 93961-2000 <br />
                (13) 98220-2000
              </Text>
            </>
          ) : (
            <>
              <Titles
                text_label="contate-nos"
                text_title="Preparado para transformar sua casa no seu lar?"
                text_span=""
              />
              <Text>
                Escreva ao lado uma mensagem <br /> para nós e entraremos em
                contato!
              </Text>
              <Button texto="Veja outros contatos" variantType="outline" destino="contato"/>
            </>
          )}
        </div>
        <Form />
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
          <Button texto="Contate agora" destino="contato" />
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
          <Button texto="Contate agora" destino="contato" />
        </StyledLocationsCard>
      </StyledLocations>
    </StyledSection>
  );
};

export default ContactUs;
