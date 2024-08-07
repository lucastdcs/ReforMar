import styled from "styled-components";
import "../../assets/styles/base/variables.css"

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    padding: 6rem 0;
    overflow-x: auto; 
    ::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    -ms-overflow-style: none;

    @media (max-width: 515px) {
        flex-wrap: wrap;
    }
`;

export default StyledContainer

