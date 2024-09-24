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
    top: 10%;
    transform: translate(-50%, 0%);
    width: 90vw;
    height: fit-content;
    overflow: hidden;
    background-color: var(--black);
    border-radius: 4rem;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;



    color: var(--off-white);

    @media (max-width:800px){
            padding: 4rem 1rem;

            #back {
                margin-right: 3rem;
            }
    }

    .all_details_wrapper {
        max-width: 77rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6rem;
        margin: 6rem auto;

        .detail_wrapper {
            text-align: center;
        }
    }

    .description_wrapper {
        max-width: 77rem;
        margin: auto;
        margin-bottom: 6rem;

        p {
            margin: 0;
        }
    }
    
    .project_card {
      text-align: left;
      border: 1px solid var(--off-white);
      margin: auto;
      width: 95%;
      height: auto;
      border-radius: 4rem;
      margin-bottom: 5rem;
    }

    #back{
        background-color: transparent;
        border: none;
        width: fit-content;
        align-self: end;
        margin-bottom: 6rem;
        margin-right: 3rem;
        cursor: pointer;
        
        h3 {
            color: var(--off-white);

        }
    }

    .preview {
        margin: 8rem 0;
        max-width: 132rem;
        min-width: 90%;
        
        img {
            min-width: 100rem;
            width: 100%;
            max-height: 90vh;
            pointer-events: none;
            border-radius: 2rem;
            object-fit: cover;

        }
        @media (max-width:800px){
            width: 100%;
            img {
                width: 60vw;
                min-width: 0;
            }

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
            height: 100%;
            max
            border-radius: 2rem;
            object-fit: contain;
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
        @media (max-width:600px){


            grid-template-rows: auto ;
            img {
                object-fit: contain;
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
                grid-column: 1 / span 2;
                grid-row: 3;
            }

            ._img4{
                grid-column: 1 / span 2;
                grid-row: 4;
            }

            ._img5{
                grid-column: 1 / span 2 ;
                grid-row: 5;
            }
        }
    }
    .more {
        h3 {
            margin: 5rem 0;
        }
    }
`;


