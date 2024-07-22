import styled from "styled-components"

export const StyledContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);


`;

export const Overlay = styled.section`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 90vw;
    background-color: var(--black);
    border-radius: 4rem;
    padding: 4rem;

    display: flex;
    flex-direction: column;


    color: var(--off-white);

    .all_details_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6rem;
        margin: 6rem 0;

        .detail_wrapper {
            text-align: left;
        }
    }

`;