import styled from "styled-components";


const StyledHeader = styled.header`
    width: 90%;
    height: auto;
    padding: 4rem;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15%;

    .wrapper {
        width: 20%;
        max-width: 50rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15%;
    }

    .wrapper2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10rem;
    }

    span {
        display: flex;
        gap: 4rem;
        height: 1.5rem;
    }

    span a{
        margin: 0;
        height: min-content;
    }

    img {
        max-height: 6rem;
    }

    nav {
        max-width: 56rem;
        display: flex;
        /* justify-content: space-between; */
        gap: 7.2rem;
    }

    nav a {
        text-decoration: none;
    }

    nav label{
        font-weight: lighter;
    }

`;

export default StyledHeader