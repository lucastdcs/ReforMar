import styled from "styled-components";

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

    ::file-selector-button {
    display: none;
    }

`;
