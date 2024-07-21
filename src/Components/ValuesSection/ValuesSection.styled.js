import styled from "styled-components";

export const StyledContainer = styled.section`

    width: 100vw;
    color: var(--black);
    text-align: center;
    height: max-content;
    background-color: ${props => (props.black_bg ? "var(--black)" : "transparent")};
    padding: 12rem 0;


    .project_title{
    color: ${props => (props.black_bg ? "white" : "inherit")}
    }
`;

export const ValuesGrid = styled.div`
    margin: auto;
    max-width: 80vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.3fr 2fr auto 2fr;
    align-items: center;
    justify-items: center;
    grid-gap: 5rem;

    p {
      color: ${(props) => props.text_color};
    }


    .agile {
      grid-column: 1 / span 2;
      grid-row: 2 / span 2;
    }

    .customer {
      grid-column: 3 / span 2;
      grid-row: 1 / span 2;
    }

    .quality {
      grid-column: 5 / span 2;
      grid-row: 2 / span 2;
    }

    .colaborate {
      grid-column: 2 / span 2;
      grid-row: 4 / span 2;
    }

    .learning {
      grid-column: 4 / span 2;
      grid-row: 4 / span 2;
    }

    .btn {
      grid-column: 3 / span 2;
      grid-row: 3;
    }

    @media (max-width: 1330px) {
      display: flex;
      flex-direction: column;
      max-width: 90vw;
    }
  `;