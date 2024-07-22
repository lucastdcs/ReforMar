import styled from "styled-components";

export const StyledContainer = styled.section`
    display: flex;
    flex-direction: column;
    div, button {
        align-self: center;
    }
    width: 100vw;
    color: var(--black);
    text-align: center;
    margin-top: 10rem;
    .project_title {
    text-align: start;
    margin-left: 10%;
    }
    h2 {
        margin-bottom: 8rem;
        max-width: 125rem;
    }

    button {
    margin-top: 6rem;
    margin-bottom: 6rem;
    }
`;