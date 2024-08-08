import styled, {css} from "styled-components";
import { motion } from "framer-motion";
import "../../assets/styles/base/variables.css"

const StyledButton = styled(motion.button)`
    max-width: 26rem;
    min-width: 16rem;
    max-height: 7rem; /* Valor base */
    min-height: 4.5rem; /* Valor base */
    /* width: 10vw; */
    height: 3vw;
    padding: 0 3rem;
    white-space: nowrap;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
    background-color: var(--color-tertiary);
    border-radius: 2.6rem;
    border-style: none;

    font-family: var(--font-family-grifter);
    color: inherit;

    cursor: pointer;

    color: white;
    ${props => props.variantType === 'outline' && css`
        background-color: transparent;
        border: 2px solid white;
    `}

`;

export default StyledButton