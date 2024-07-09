import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  gap: 2rem;
  /* width: 200vw; */
  /* scroll-snap-type: x mandatory; */

  > * {
    scroll-snap-align: start;
    flex: 0 0 auto; /* Impede que os itens flex encolham ou cresçam */
  }
  ::-webkit-scrollbar {
    height: 20rem;
  }

`;