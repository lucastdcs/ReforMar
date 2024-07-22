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

export const StyledCard = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    max-width: 100rem;
    height: fit-content;
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
        margin-bottom: 2rem;
    }

    p{
        color: var(--grey);
        display: inline-block;
        margin-right: 8rem;
    }

    .wrapper{
        display: grid;
        grid-template-areas:
            'title title title'
            'text1 text2 button';
        margin-left: 4rem;
        margin-top: 2rem;
    }

    .title {
        grid-area: title;
    }
    .texto1 {
        grid-area: text1;
    }
    .texto2 {
        grid-area: text2;
    }
    .btn {
        grid-area: button;
    }

    button {
        align-self: flex-end;

    }


    @media (max-width:1050px){
        width: fit-content;
        height: 48rem;
       
        .wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
        } 
       
        p{
            margin-right: 0;
        }
       img {
        height: 15rem;
        }

        button {
            margin-top: 3rem;
        }
    }

`;
