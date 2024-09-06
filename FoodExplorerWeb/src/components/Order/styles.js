import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 16px 0;
    align-items: center;
    justify-content: center;
    gap: 15px;

    div{
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    p{
        font-size: 20px;
        font-weight: 500;
    }

    span{
        font-size: 15px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }

    h3{
        font-size: 15px;
        font-weight: 400;
    }

`;