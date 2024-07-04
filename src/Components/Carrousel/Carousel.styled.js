import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; /* Suaviza o scroll no iOS */

  &::-webkit-scrollbar {
    display: none; /* Esconde a barra de rolagem no WebKit */
  }

  > * {
    scroll-snap-align: start;
    flex: 0 0 auto; /* Impede que os itens flex encolham ou cresçam */
  }

  /* Para evitar que os itens ultrapassem as bordas */
  -ms-overflow-style: none; /* Para o Internet Explorer e Edge */
  scrollbar-width: none; /* Para o Firefox */
`;