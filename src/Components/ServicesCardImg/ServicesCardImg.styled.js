import styled from "styled-components";

export const StyledServicesCard = styled.div`
   max-width: 134rem;
   /* min-width: 30rem; */
   height: fit-content;

   background-color: var(--black);
   border-radius: 4rem;
   padding: 3rem;

   display: grid;
   grid-template-columns: 2rem auto 2fr 1fr 1fr;
   grid-template-rows: auto auto auto;
   grid-row-gap: 4rem;
   grid-column-gap: 2rem;

   text-align: left;
   align-items: center;

   .example {
      grid-column: 1 / span 5;
      grid-row: 1;
   }

   .icon {
      grid-column: 2 ;
      grid-row: 2;
   }

   .title {
      grid-column: 3 ;
      grid-row: 2;
      justify-self: left;
   }

   .example {
      border-radius: 2rem;
      width: 100%;
      height: 60rem;
      object-fit: cover;
   }

   .description {
      grid-column: 2 / span 2;
      grid-row: 3;
   }

   .btn {
      grid-column: 4;
      grid-row: 3;
      justify-self: right;
   }

   .btn2 {
      grid-column: 5;
      grid-row: 3;
      justify-self: left;

   }
   


   p {
    color: var(--grey1);
    
   }

   h3{
    color: var(--color-tertiary);
   }
   
`;
