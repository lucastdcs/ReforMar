import styled from "styled-components";


const StyledHeader = styled.header`
    width: 90%;
    height: auto;
    padding: 40px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15%;

    .wrapper {
        width: 20%;
        max-width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15%;
    }

    .wrapper2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
    }

    span {
        display: flex;
        gap: 40px;
        height: 15px;
    }

    span a{
        margin: 0;
        height: min-content;
    }

    img {
        max-height: 60px;
    }

    nav {
        max-width: 560px;
        display: flex;
        /* justify-content: space-between; */
        gap: 72px;
    }

    nav a {
        text-decoration: none;
    }

    nav label{
        font-weight: lighter;
    }

`;

export default StyledHeader