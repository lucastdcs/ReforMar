import React from "react";
import styled from "styled-components"
import Transition from "../Components/Transitions/Transitions";

const Contact = () => {
    const Blank = styled.div`
        width: 100vw;
        height: 15rem;
        background-color: var(--black);
    `;
    return (
        <Blank/>
    );
};

export default Transition(Contact);