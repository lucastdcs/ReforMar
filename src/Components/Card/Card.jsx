import React from "react";
import styled from "styled-components";
import { StyledCard } from "./Card.styled";
import CardExample from "../../assets/imgs/CardExample.png"

const Card = () => {
    return (
        <>
        <StyledCard>
            <img src={CardExample} alt="" />
        </StyledCard>
        </>
    );
};

export default Card;