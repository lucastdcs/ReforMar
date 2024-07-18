import styled from "styled-components";

export const StyledSection = styled.section`
    width: 100vw;
    background-color: var(--black);
    padding: 12rem 4vw;


    .form_wrapper{
        max-width: 132rem;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }

    .title_wrapper{
        max-width: 83rem;
        width: 100%;
    }

    .title_wrapper p {
        margin: 5rem 0;
    }

    @media (max-width:960px){

        .form_wrapper {
            flex-direction: column;
            text-align: left;

            form {
                width: 100%;
                max-width: none;
                margin: auto;
                margin-top: 10rem ;

                div {
                    width: 100%;
                    max-width: none;
                }
            }

            .title_wrapper {
                text-align: left;
            }

        }

        .locations_wrapper{

            :nth-child(3){
                margin-right: 0;
            }

            div {
                width: 100%;
                padding: 10%;
                margin-top: 5rem;

                p {
                    margin-right: 0;
                }
            }
        }

    }
`;

export const StyledForm = styled.form`
    max-width: 38rem;
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
    margin-left: 4rem;

    button {
        width: 100%;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    border-radius: 3rem;
    border: none;
    padding: 3rem;
    padding-right: 1rem;
    font-family: var(--font-family-grifter);
    color: var(--grey);
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    min-height: 27rem;
    border-radius: 3rem;
    border: none;
    padding: 3rem;
    padding-right: 1rem;
    font-family: var(--font-family-grifter);
    color: var(--grey);

`;

export const StyledArchive = styled.div`
    display: flex;
    align-items: center;
    padding-right: 4rem;
    background: transparent;
    border: 1px solid var(--off-white);
    border-radius: 3rem;

    ::placeholder{
        color: var(--off-white);
    }
    color: var(--off-white);

    input {
        background-color: transparent;
        width: 100%;
    }

`;


export const StyledLocations = styled.div`
    max-width: 121rem;
    margin: auto;
    margin-top: 12rem;
    text-align: center;
    :nth-child(3){
        margin-right: 2rem;
    }
`;

export const StyledLocationsCard = styled.div`
    display: inline-block;
    max-width: 56rem;
    margin-top: 12rem;
    text-align: center;
    border: 1px solid var(--off-white);
    border-radius: 3rem;
    padding: 6rem 10rem;

    svg {
        margin-bottom: 2rem;
    }

    p {
        margin: 6rem 0;
        color: var(--grey);
    }

`;