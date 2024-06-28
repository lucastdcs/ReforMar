import styled from "styled-components";


const StyledHeader = styled.header`
    max-width: 192rem;
    width: 100vw;
    height: auto;
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15vw;

    .wrapper {
        width: 20%;
        max-width: 50rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }

    .wrapper2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10rem;
    }

    span {
        display: flex;
        gap: 3rem;
        height: 1.5rem;
    }

    span a{
        margin: 0;
        height: min-content;
    }

    #logo {
        max-height: 6rem;
        max-width: 100%; /* Ajusta o logo ao contêiner pai */
        width: 15vw; /* Ajusta o logo de acordo com a largura da viewport */
  }

  #logo_pequeno{
    display: none;
  }

    nav {
        max-width: 56rem;
        display: flex;
        /* justify-content: space-between; */
        gap: 2vw;
    }

    nav a {
        text-decoration: none;
    }

    nav label{
        font-weight: lighter;
    }

    @media (max-width: 1800px) {
        .wrapper {
        gap: 5rem;
    }
        .wrapper2 {
        gap: 5rem;
    }

    #logo {
        max-height: 6rem;
        max-width: 100%; /* Ajusta o logo ao contêiner pai */
        width: 13vw; /* Ajusta o logo de acordo com a largura da viewport */
    }
  }
    @media (max-width: 1300px) {
        .wrapper2 nav a {
            font-size: var(--font-size-label10);
        }

        #logo_pequeno{
            display: block;
        }

        #logo{
            display: none;
        }
  }
    @media (max-width: 1060px) {

        button {
            display: none;
        }

    }
  

`;

export const StyledNav = styled.nav`
    max-width: 56rem;
    display: flex;


    ul {
        display: flex;
        gap: 2vw;
        margin: 0;
        padding:0;
    }

    ul li {
        list-style: none;
    }

   a {
        text-decoration: none;
    }


    @media (max-width: 1060px) {
        flex-direction: column;

        position:relative;
        z-index: 1;

        &::before{
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        &.active::before {
    opacity: 1;
  }

        

}
`;

export default StyledHeader;