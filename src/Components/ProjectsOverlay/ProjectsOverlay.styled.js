import styled from "styled-components"

export const StyledContainer = styled.div`
    position: fixed;
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
    top: 50%;
    transform: translate(-50%, 0%);
    width: 90vw;
    overflow-x: hidden;
    background-color: var(--black);
    border-radius: 4rem;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;


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

    .preview {
        margin: 8rem 0;
        max-width: 132rem;

        img {
            min-width: 100rem;
            width: 100%;
            pointer-events: none;
            border-radius: 2rem;
        }
    }

    .photos_grid {
        margin: 8rem 0;
        max-width: 132rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto ;
        grid-gap: 2rem;

        img {
            width: 100%;
            border-radius: 2rem;
        }

        ._img1{
            grid-column: 1 / span 2;
            grid-row: 1;
        }

        ._img2{
            grid-column: 1 / span 2;
            grid-row: 2;
        }

        ._img3{
            grid-column: 1 ;
            grid-row: 3;
        }

        ._img4{
            grid-column: 2 ;
            grid-row: 3;
        }

        ._img5{
            grid-column: 1 / span 2 ;
            grid-row: 4;
        }
    }
    .more {
        h3 {
            margin: 5rem 0;
        }
    }
`;


