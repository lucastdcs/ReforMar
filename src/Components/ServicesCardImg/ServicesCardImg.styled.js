import styled from "styled-components";

export const StyledServicesCard = styled.div`
   max-width: 134rem;
   /* min-width: 30rem; */
   height: fit-content;

   background-color: var(--black);
   border-radius: 4rem;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

   padding: 3rem;

   display: grid;
   grid-template-columns: 2rem auto 2fr 1fr 1fr;
   grid-template-rows: min-content auto auto;
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
   

   @media (max-width:1070px){

   grid-template-columns: 2rem auto 2fr auto 1fr;

      .btn {
      grid-column: 5;
      grid-row: 3;
      align-self: flex-start;
      width: 100%;
   }

   .btn2 {
      align-self: flex-end;
      width: 100%;

   }
   }

   @media (max-width:840px){
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto auto auto;
      grid-row-gap: 2rem;
      padding: 2.5rem;

   .example {
      grid-column: 1 / span 2;
      grid-row: 1;
      width: 100%;
      height: 20rem;
   }

   .icon {
      grid-column: 1 ;
      grid-row: 2;
   }

   .title {
      grid-column: 1 ;
      grid-row: 3;
      justify-self: left;
   }

   .description {
      grid-column: 1 / span 2;
      grid-row: 4;
   }

   .btn {
      grid-column: 1;
      grid-row: 5;
      justify-self: right;
   }

   .btn2 {
      grid-column: 2;
      grid-row: 5;
      justify-self: left;

   }
}

@media (max-width:480px){
   grid-template-rows: auto auto auto auto auto auto;
   padding: 2rem;

   .btn2 {
      grid-row: 6;
      grid-column: 1 / span 2;
      justify-self: center;
   }
   .btn{
      grid-column: 1 / span 2;
      justify-self: center;

   }
}
`;
