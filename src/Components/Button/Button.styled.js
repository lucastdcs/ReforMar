import styled from "styled-components";
import "../../assets/styles/base/variables.css"

const StyledButton = styled.button`
    max-width: 26rem; /* Valor base */
    min-width: 16rem;
    max-height: 7rem; /* Valor base */
    min-height: 4.5rem; /* Valor base */
    width: 10vw; /* Ajuste automático com base na largura da viewport */
    height: 4vw; /* Ajuste automático com base na largura da viewport */
    max-width: 100%; 

    background-color: var(--color-tertiary);
    border-radius: 3rem;
    border-style: none;

    font-family: var(--font-family-grifter);
    color: inherit;

`;

export default StyledButton