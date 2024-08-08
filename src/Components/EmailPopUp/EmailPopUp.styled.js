import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5); /* Fundo semitransparente */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const PopUp = styled(motion.div)`
    max-width: 38.4rem;
    padding: 4rem 6.2rem;
    background: var(--off-white);
    border-radius: 3rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;

    h3 {
        color: var(--black);
        margin-bottom: 6rem;
    }
`;
