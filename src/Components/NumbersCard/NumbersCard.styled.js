import styled, { css } from "styled-components";

const StyledContainer = styled.div`
    background-color: var(--off-white);
    width: fit-content;
    height: 100%;
    padding: 8rem 6rem;
    border-radius:3rem ;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border: 1px solid var(--black);
    color: var(--black);
    white-space: nowrap;
    text-align: left;

    @media (max-width: 768px) {
      padding: 3rem 2rem;
      h1 {
            font-size: var(--font-size-mh1);
      }     
    }

    ${props => props.align === 'right' && css`
        text-align: right;
    `}

    ${props => props.size === 'h2' && css`

      h1 {
        font-size: var(--font-size-h2);
        @media (max-width: 1060px) {
        font-size: 4rem;
      }

      @media (max-width: 768px) {
          font-size: var(--font-size-mh2);
      }

      /* @media (max-width: 480px) {
          font-size: 3rem;
      } */
      }
      
    `}

    @media (max-width: 400px) {
      h1 {
        font-size:var(--font-size-mh2)
      }
    }


`;

export default StyledContainer;