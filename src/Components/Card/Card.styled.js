import styled from "styled-components";

export const StyledCard = styled.div`
    margin-top: 8rem;
    margin-bottom: 2rem;
    width: 100rem;
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


    @media (max-width:900px){
        width: 90vw;
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
