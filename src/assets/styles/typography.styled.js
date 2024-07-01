import styled from 'styled-components'

export const H1 = styled.h1`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-h1);
    line-height: var(--spacing-90);

    @media (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media (max-width: 480px) {
        font-size: 3rem;
    }
`; 

export const MH1 = styled.h1`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-mh1);
    line-height: var(--spacing-100);

`; 

export const H2 = styled.h2`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-h2);
    line-height: var(--spacing-90);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`; 

export const MH2 = styled.h2`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-mh2);
    line-height: var(--spacing-100);

`; 

export const H3 = styled.h3`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-h3);
    line-height: var(--spacing-100);

    @media (max-width: 768px) {
        font-size: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const MH3 = styled.h3`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-mh3);
    line-height: var(--spacing-100);

`;

export const Text = styled.p`
    font-family: var(--font-family-helvetica);
    font-size: var(--font-size-h6);
    line-height: var(--spacing-200);

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const MText = styled.p`
    font-family: var(--font-family-helvetica);
    font-size: var(--font-size-mp );
    line-height: var(--spacing-200);

`;
  
export const Label = styled.a`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-label10);
    line-height: var(--spacing-160);
    text-transform: uppercase;
    white-space: nowrap;

    letter-spacing: 0.4rem;

    cursor: pointer;

    font-size: ${props => (props.primary ? 'var(--font-size-label15)' : 'var(--font-size-label10)')};

    @media (max-width: 768px) {
        font-size: ${props => (props.primary ? '1.8rem' : '1.4rem')};
    }

    @media (max-width: 480px) {
        font-size: ${props => (props.primary ? '1.6rem' : '1.2rem')};
    }

`; 

export const MLabel = styled.a`
    font-family: var(--font-family-grifter);
    font-size: var(--font-size-mlabel1);
    line-height: var(--spacing-160);
    text-transform: uppercase;
    white-space: nowrap;

    letter-spacing: 0.4rem;

    cursor: pointer;

    font-size: ${props => (props.primary ? 'var(--font-size-mlabel2)' : 'var(--font-size-mlabel1)')};


`; 

