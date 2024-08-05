import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCarouselNew = styled(motion.div)`
    cursor: drag;
    overflow: hidden;
  width: 100%; /* Ajuste a largura conforme necessário */
  margin: 0 auto; /* Centraliza o carrossel horizontalmente */
  display: flex;
  justify-content: center; /* Centraliza os itens dentro do carrossel */

`;

export const Inner = styled(motion.div)`
    display: flex;
    width: 80%;

`;

export const Item = styled(motion.div)`
    margin: 0 1rem;
    width: fit-content;
    height: fit-content;

`;