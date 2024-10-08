import styled from "styled-components";

const StyledContainer = styled.div`
    width: 40rem;
    padding: 3rem;
    margin-bottom: 2rem;
    height: 30rem;
    border: 1px solid black;
    border-radius: 3rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

    background-color: var(--off-white);
    display: grid;
    grid-template-columns: 1fr 0.5fr 1fr 1fr;
    grid-template-rows: auto auto auto 2fr;
    grid-row-gap: 1rem;
    text-align: left;

    .fb_photo{
        grid-column: 1;
        grid-row: 1 / span 2;
        align-self: center;
        margin-right: 1rem;

        border-radius: 50%;
    }

    .fb_name{
        grid-column: 2 / span 2;
        grid-row: 1;
        align-self: flex-end;
    }

    .fb_type{
        grid-column: 2 / span 2;
        grid-row: 2;
        color: var(--grey);
    }

    .fb_stars{
        grid-column: 1 / span 2;
        grid-row: 3;
    }

    .fb_date{
        grid-column: 3;
        grid-row: 3;
    }

    .fb_comentary{
        grid-column: 1 / span 4;
        grid-row: 4;
        align-self: center;
    }

    p {
        line-height: normal;
    }

    @media (max-width:428px){
        width: 80vw;
    }
`;

export default StyledContainer;