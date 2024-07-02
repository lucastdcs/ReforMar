import styled from "styled-components";
import "../../assets/styles/base/variables.css"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    /* align-self: start; */
    justify-content: center;
    gap: 1.6rem;
    padding: 6rem 0;
    margin: 0 1rem;
    overflow-x: hidden;
    
    @media (max-width: 515px) {
        
        justify-content: start;
        overflow-x: scroll;
    }
`;

export default StyledContainer