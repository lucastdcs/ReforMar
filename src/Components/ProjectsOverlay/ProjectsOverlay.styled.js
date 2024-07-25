import styled from "styled-components"

export const StyledContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    overflow-y: auto;
    z-index: 1000;
`;

export const Overlay = styled.section`
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    max-width: 90vw;
    min-width: 140rem;
    background-color: var(--black);
    border-radius: 4rem;
    padding: 4rem;

    display: flex;
    flex-direction: column;


    color: var(--off-white);

    .all_details_wrapper {
        max-width: 77rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6rem;
        margin: 6rem auto;

        .detail_wrapper {
            text-align: left;
        }
    }

    .description_wrapper {
        max-width: 77rem;
        margin: auto;
        margin-bottom: 6rem;
    }
    
    .project_card {
      text-align: left;
      border: 1px solid var(--off-white);
      margin: auto;
      max-width: 130rem;
      border-radius: 4rem;
    }

    #back{
        background-color: transparent;
        border: none;
        width: fit-content;
        align-self: end;
        margin-bottom: 6rem;
        cursor: pointer;
        
        h3 {
            color: var(--off-white);

        }
    }

`;


