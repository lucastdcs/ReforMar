import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCarouselNew = styled(motion.div)`
    cursor: drag;
    overflow: hidden;
    margin: auto;
    width: 100%;

`;

export const Inner = styled(motion.div)`
    display: flex;
    width: 100%;

`;

export const Item = styled(motion.div)`
    margin: 0 1rem;
    width: fit-content;
    height: fit-content;

`;