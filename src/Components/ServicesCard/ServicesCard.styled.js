import styled from "styled-components";

export const StyledServicesCard = styled.div`
   /* max-width: 60rem; */
   min-width: 30rem;
   height: 60rem;
   background-color: var(--black);
   border-radius: 4rem;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
   padding: 6rem 3rem 3rem 6rem;
   display: flex;
   flex-direction: column;


   p {
    color: var(--grey1);
    
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
   
   @media (max-width:740px){
      div button:nth-child(1){
         margin-bottom: 1rem;
      }

      padding: 4rem 2rem 2rem 4rem;

      div {
         display: flex;
         flex-wrap: wrap;
         justify-content: end;
      }

      height: fit-content;

      p {
         margin-bottom: 1.4rem;
      }

      h3 {
         margin: 2rem 0;
      }
   }
`;
