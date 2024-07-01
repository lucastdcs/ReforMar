import styled from "styled-components";
import "../../assets/styles/base/variables.css"

const StyledButton = styled.button`
    max-width: 26rem;
    min-width: 16rem;
    max-height: 7rem; /* Valor base */
    min-height: 4.5rem; /* Valor base */
    /* width: 10vw; */
    height: 4vw;
    max-width: 100%; 
    padding: 0 3rem;
    white-space: nowrap;

    background-color: var(--color-tertiary);
    border-radius: 3rem;
    border-style: none;

    font-family: var(--font-family-grifter);
    color: inherit;

    cursor: pointer;

`;

export default StyledButton