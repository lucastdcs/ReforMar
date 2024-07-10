import styled from "styled-components";

export const StyledServicesCard = styled.div`
   width: 60rem;
   max-width: 100%;
   height: 60rem;
   background-color: var(--black);
   border-radius: 4rem;
   padding: 6rem 3rem 3rem 6rem;
   display: flex;
   flex-direction: column;


   p {
    color: var(--grey);
    
   }
   h3{
    color: var(--color-tertiary);
    margin: 4rem 0;
   }

   div  {
      align-self: flex-end;
      margin-top: auto;
   }

   div button:nth-child(1){
      margin-right: 1rem;
   }
`;
