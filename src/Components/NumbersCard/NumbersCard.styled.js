import styled, {css} from "styled-components";

const StyledContainer = styled.div`
    background-color: var(--off-white);
    width: fit-content;
    height: 100%;
    padding: 8rem 6rem;
    border-radius:3rem ;
    border: 1px solid var(--black);
    color: var(--black);

    text-align: left;
    ${props => props.align === 'right' && css`
        text-align: right;
    `}

    ${props => props.size === 'h2' && css`
      h1 {
        font-size: var(--font-size-h2);
      }
    `}

    white-space: nowrap;




`;

export default StyledContainer;