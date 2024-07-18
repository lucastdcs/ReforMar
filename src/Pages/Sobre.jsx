import React from "react";
import styled from "styled-components";
import FeedbackSection from "../Components/FeedbackSection/FeedbackSection";
import Titles from "../Components/Titles/Titles";
import ServicesCardImg from "../Components/ServicesCardImg/ServicesCardImg";

import Kitchen from "../assets/icons/services_kitchen.svg";
import Bath from "../assets/icons/services_bath.svg";
import Barbecue from "../assets/icons/services_barbecue.svg";
import Laundry from "../assets/icons/services_laundry.svg";
import Porch from "../assets/icons/services_porch.svg";

import KithchenImg from "../assets/imgs/ServicesImg.jpg";

const Sobre = () => {
  const StyledMain = styled.main`
    width: 100vw;
    margin-top: 20rem;
    color: var(--black);
    text-align: center;
    display: flex;
    flex-direction: column;
    /* overflow: hidden; */

    section {
      margin-top: 10rem;
    }

    .cards_wrapper {
      margin: auto;
      margin-top: 6rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 0 3rem;
    }

  `;

  return (
    <StyledMain>
      <Titles
        className="first_title"
        text_label="Nossos serviços"
        text_title="Serviços para seu"
        text_span="novo lar"
      />
      <div className="cards_wrapper">
        <ServicesCardImg
          img={KithchenImg}
          icon={Kitchen}
          title="Cozinhas & Copas"
          text="Transformamos sua cozinha em um espaço funcional e moderno. Instalamos pias, torneiras e realizamos pinturas para dar vida nova ao ambiente, tornando-o perfeito para suas necessidades diárias."
        />
        <ServicesCardImg
          img={KithchenImg}
          icon={Bath}
          title="Banheiros & Lavabos"
          text="Renove seu banheiro com praticidade. Instalamos acessórios, realizamos pinturas e pequenas reformas para garantir um ambiente elegante e funcional."
        />
        <ServicesCardImg
          img={KithchenImg}
          icon={Laundry}
          title="Lavanderia & Serviços"
          text="Deixe sua lavanderia mais eficiente e organizada. Realizamos instalação de tanques, prateleiras e serviços de pintura para criar um espaço prático e agradável."
        />
        <ServicesCardImg
          img={KithchenImg}
          icon={Barbecue}
          title="Área Gourmet & Churrasqueiras"
          text="Transforme sua área de lazer em um local perfeito para reunir amigos e familiares. Instalamos churrasqueiras, bancadas e realizamos pinturas para criar um ambiente convidativo e acolhedor."
        />
        <ServicesCardImg
          img={KithchenImg}
          icon={Porch}
          title="Varandas"
          text="Amplie seus momentos de relaxamento e convívio ao ar livre. Realizamos pequenas reformas, instalação de pisos e serviços de pintura para transformar sua varanda em um espaço aconchegante e funcional."
        />
      </div>
      <FeedbackSection />
    </StyledMain>
  );
};

export default Sobre;
