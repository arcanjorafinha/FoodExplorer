import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;

    >input{
        max-height: 56px;
        width: 100%;
        min-width: 200px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        padding: 14px;

        border-radius: 5px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

    }

    > svg{
        margin-left: 30%;
    }

    >input:focus{
        border: 2px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }

`;