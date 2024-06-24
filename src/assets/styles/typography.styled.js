import styled from 'styled-components'

export const H1 = styled.h1`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-h1);
    line-height: var(--spacing-90);
`; 

export const H2 = styled.h2`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-h2);
    line-height: var(--spacing-90);
`; 

export const H3 = styled.h3`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-h3);
    line-height: var(--spacing-100);
`;

export const Text = styled.p`
    font-family: var(--font-family-helvetica);
    font-size: var(--font-size-h6);
    line-height: var(--spacing-200);
`;
  
export const Label = styled.label`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-label10);
    line-height: var(--spacing-160);
    text-transform: uppercase;

    letter-spacing: 4px;

    font-size: ${props => (props.primary ? 'var(--font-size-label15)' : 'inherit')};

`; 

