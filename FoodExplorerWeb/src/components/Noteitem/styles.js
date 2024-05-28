import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 8px;
    padding-right: 16px; 

    >button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .button-add{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    >input{
        height: 32px;
        width: 100%;

        padding: 10px 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;  