import styled from 'styled-components';
import { motion } from 'framer-motion';

export const H1 = styled.h1`
  font-family: var(--font-family-grifter);
  font-size: clamp(8rem, 2.5vw + 6rem, 16rem); /* Mínimo 8rem, ideal ajustável, máximo 16rem */
  line-height: var(--spacing-90);
`;

export const H2 = styled.h2`
  font-family: var(--font-family-grifter);
  font-size: clamp(5rem, 2.5vw + 2rem, 10rem); /* Mínimo 5rem, ideal ajustável, máximo 10rem */
  line-height: var(--spacing-90);

  span {
    color: var(--color-tertiary);
  }
`;

export const H3 = styled.h3`
  font-family: var(--font-family-grifter);
  font-size: clamp(2.6rem, 1.2vw + 1.4rem, 5rem); /* Mínimo 2.6rem, ideal ajustável, máximo 5rem */
  line-height: var(--spacing-100);
`;

export const H4 = styled.h3`
  font-family: var(--font-family-helvetica);
  font-size: clamp(2.2rem, 1.2vw + 1.3rem, 4.5rem); /* Mínimo 2.2rem, ideal ajustável, máximo 4.5rem */
  line-height: var(--spacing-100);
`;

export const H5 = styled.h3`
  font-family: var(--font-family-helvetica);
  font-size: clamp(2rem, 1.2vw + 1.3rem, 4rem); /* Mínimo 2rem, ideal ajustável, máximo 4rem */
  line-height: var(--spacing-100);
`;

export const H6 = styled.h3`
  font-family: var(--font-family-helvetica);
  font-size: clamp(1.8rem, 0.8vw + 1rem, 2rem); /* Mínimo 1.8rem, ideal ajustável, máximo 2rem */
  line-height: var(--spacing-100);
`;

export const H7 = styled.h3`
  font-family: var(--font-family-grifter);
  font-size: clamp(1.8rem, 0.8vw + 1rem, 2rem); /* Mínimo 1.8rem, ideal ajustável, máximo 2rem */
  line-height: var(--spacing-100);
`;

export const Text = styled.p`
  font-family: var(--font-family-helvetica);
  font-size: clamp(1.2rem, 1vw + 0.2rem, 1.6rem); /* Mínimo 1.2rem, ideal ajustável, máximo 1.6rem */
  line-height: var(--spacing-200);
`;

export const Label = styled(motion.a)`
  font-family: var(--font-family-grifter);
  font-size: clamp(1rem, 0.5vw + 0.6rem, 1.5rem); /* Mínimo 1rem, ideal ajustável, máximo 1.5rem */
  line-height: var(--spacing-160);
  text-transform: uppercase;
  white-space: nowrap;
  letter-spacing: 0.4rem;
  cursor: pointer;
  color: var(--off-white);

  font-size: ${props => props.primary ? 'clamp(1.2rem, 1vw + 0.6rem, 2rem)' : 'clamp(0.6rem, 0.22vw + 0.6rem, 1.5rem)'}; /* Ajuste proporcional */
`;

export const LabelTitle = styled.h3`
  font-family: var(--font-family-grifter);
  font-size: clamp(1rem, 0.5vw + 0.6rem, 1.5rem); /* Mínimo 1rem, ideal ajustável, máximo 1.5rem */
  line-height: var(--spacing-160);
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  color: var(--grey);
  text-shadow: 1px 2px 5px var(--grey-shadow);

  font-size: ${props => props.primary ? 'clamp(1.3rem, 1vw + 0.3rem, 2rem)' : 'clamp(1rem, 0.5vw + 0.5rem, 1rem)'}; /* Ajuste proporcional */
`;
