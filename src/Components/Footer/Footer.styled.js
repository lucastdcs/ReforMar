import styled from "styled-components";

export const StyledContainer = styled.footer`
    width: 100vw;
    background-color: var(--black);
    padding-bottom: 6rem;
    
    .wrapper {
        margin: auto;
        padding: 2rem;
        width: fit-content;
        display: flex;
        align-items: start;
        gap: 10vw;
        
    }
    .socials_wrapper span {
      width: 70%;
      display: flex;
      justify-content: space-between;
      margin: auto;
      margin-bottom: 4rem;
    }

    .socials_wrapper {
        width: fit-content;
    }

    ul li {
        list-style: none;
        cursor: pointer;
    }

    ul {
    
        color: var(--grey);
    }
    
    .list_title{
        color: var(--off-white);
    }

    @media (max-width:1005px){
        .wrapper{
            display: grid;

            .socials_wrapper {
                grid-row: 4;
            }
        }
    }

`;

export const Legal = styled.div`
    width: 100vw;
    /* display: flex;
    justify-content: space-between; */
    background-color: var(--black);
    padding: 2rem;
    text-align: center;


    border-top: 1px solid var(--off-white);
    p {
        font-family: var(--font-family-grifter);
        font-size: 1.5rem;
        color: var(--grey);
    }
`;