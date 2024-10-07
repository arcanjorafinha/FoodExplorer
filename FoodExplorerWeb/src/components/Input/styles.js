import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    >input{
        max-height: 3.5rem;
        width: 100%;
        min-width: 200px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;

        padding: 12px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 5px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

    }

    >input:focus{
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Label = styled.label`
    align-self: flex-start;
    margin-bottom: 0.75rem;
    font-size: 1rem;
`;

export const FileInputWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;

    input[type="file"] {
        opacity: 0;
        position: absolute;
        width: 100%;
        height: 3.5rem;
        cursor: pointer;
    }
`;

export const FileInputLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
    cursor: pointer;

    img {
        margin-right: 8px;
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
    }
`;
