import styled from "styled-components";

export const StyledServicesCard = styled.div`
   width: 60rem;
   max-width: 100%;
   height: 60rem;
   background-color: var(--black);
   border-radius: 4rem;
   padding: 6rem 6rem 3rem 3rem;
   display: flex;
   flex-direction: column;

   span{
    align-self: flex-start;
   }

   h3{
    color: var(--color-tertiary);
   }
`;
