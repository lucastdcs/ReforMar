import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  margin-left: 1rem;
  > * {
    scroll-snap-align: start;
    flex: 0 0 auto;
  }


`;