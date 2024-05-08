import styled from "styled-components";

export const Container = styled.div`
    min-width: 300px;
    min-height: 460px;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 8px;
    padding: 15px 24px;
    text-align: center;
    gap: 10px;

    
    display: flex;
    flex-direction: column;
    align-items: center;

    >h1{
        font-size: 24px;
    }
    >h2{
        font-size: 14px;
        font-weight: 400;
    }

    > div{
        align-items: center;
        justify-content: space-between;
        display: flex;
        width: 80%;
        height: 48px;
        gap: 14px;
    }

    >span{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 32px;
        font-family: "Roboto", serif;
        font-weight: 400;
    }
`;