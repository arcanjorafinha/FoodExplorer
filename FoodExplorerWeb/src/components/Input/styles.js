import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    margin-bottom: 32px;

    >input{
        height: 56px;
        width: 100%;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        border: none;

        padding: 12px;

        background-color: ${({ theme }) => theme.COLORS.DARK_900};
        border-radius: 5px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

    }

    >input:focus{
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

`;

export const Label = styled.label`
    align-self: flex-start;
    margin-bottom: 8px;
    font-size: 16px;
`;
