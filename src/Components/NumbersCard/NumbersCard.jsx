import React from "react";
import { H1 } from "../../assets/styles/typography.styled";
import { H5 } from "../../assets/styles/typography.styled";
import StyledContainer from "./NumbersCard.styled";

const NumbersCard = (props) => {
    return (
        <StyledContainer align={props.align} className={props.item} size={props.size}>
            <H1>{props.number}</H1>
            <H5>{props.children}</H5>
        </StyledContainer>
    );
};

export default NumbersCard;