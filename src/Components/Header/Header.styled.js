import styled from "styled-components";


const StyledHeader = styled.header`
    width: 90%;
    height: auto;
    padding: 40px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 150px;
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
        width: 100%;
        max-width: 560px;
        display: flex;
        justify-content: space-between;
    }

    nav a {
        text-decoration: none;

    }

`;

export default StyledHeader