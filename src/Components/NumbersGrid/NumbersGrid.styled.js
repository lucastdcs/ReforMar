import styled from "styled-components";

export const StyledNumbersGrid = styled.div`
    margin: auto;
    margin-top: 6rem;
    margin-bottom: 8rem;
    
    max-width: 150rem;
    min-height: 70rem;
    max-height: 100%;
    display: grid;
    grid-template-rows: 0.3fr 2fr 2fr 0.3fr;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 2rem;

    .card1 {
      grid-row: 1 / span 2;
      grid-column: 1;
    }
    .card2 {
      grid-row: 2;
      grid-column: 2 / span 2;
    }
    .card3 {
      grid-row: 3;
      grid-column: 1 / span 2;
    }
    .card4 {
      grid-row: 3 / span 2;
      grid-column: 3;
    }

    :nth-child(3){
        width: 100%;
    }

    @media (max-width: 1550px){
        :nth-child(3){
            white-space: break-spaces;
        }
    
        width: 90vw;

    }

    @media (max-width: 1260px){

        width: 90vw;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        div{
            width: 100%;
        }

        .card1 {
        grid-row: 1;
        grid-column: 1;
        }
        .card2 {
        grid-row: 3 ;
        grid-column: 1 / span 2;
        }
        .card3 {
        grid-row: 2;
        grid-column: 1 / span 2;
        max-width: 70%;
        }

        .card4 {
            grid-row: 1;
            grid-column: 2;
        }
    }

    @media (max-width: 768px) {
        grid-gap: 0.6rem;

      }

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr ;

        .card1 {
        grid-row: 1;
        grid-column: 1;
        }
        .card2 {
        grid-row: 4;
        grid-column: 1
        }
        .card3 {
        grid-row: 2;
        grid-column: 1;
        max-width: none;
        }

        .card4 {
        grid-row: 3;
        grid-column: 1;
        }
    }  
  `;