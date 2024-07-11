import styled from "styled-components";
import "../../assets/styles/base/variables.css"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    /* align-self: start; */
    justify-content: center;
    gap: 1.6rem;
    padding: 6rem 0;
    /* margin: 0 1rem; */
    overflow-x: auto; /* Permite a rolagem horizontal */

    /* Esconde a scrollbar em WebKit (Chrome, Safari) */
    ::-webkit-scrollbar {
        display: none;
    }

    /* Esconde a scrollbar no Firefox */
    scrollbar-width: none;

    /* Esconde a scrollbar no IE e Edge (antigo) */
    -ms-overflow-style: none;

    @media (max-width: 515px) {
        position: relative;
        left: 1rem;
        justify-content: start;
        overflow-x: auto;
    }
`;

export default StyledContainer