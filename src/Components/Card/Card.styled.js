import styled from "styled-components";

export const StyledCard = styled.div`
    margin-top: 8rem;
    max-width: 100rem;
    height: 60rem;
    background-color: var(--black);
    border-radius: 2rem;
    position: relative;
    padding: 1.6rem;
    color: var(--off-white);

    img {
        width: 100%;
        height: 40rem;
        object-fit: cover;
        border-radius: 1.3rem;
    }

    h3 {
        font-family: var(--font-family-helvetica);
    }

`;
