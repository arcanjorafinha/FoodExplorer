import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 30px 120px;

    >button{
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 20px;
        gap: 10px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;

export const Plate = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > img{
        height: 390px;
        width: 390px;
    }

    > section {
        >h1{
            font-size: 80px;
            font-weight: 500;
        }
        > p{
            font-size: 24px;
        }
        > div{
            margin-top: 15px;
            align-items: center;
            width: 50%;
            display: flex;
            flex-direction: row;
            gap: 30px;
        }
        > button{
            margin-top: 15px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            border: none;
            border-radius: 5px;
            padding: 5px;
        }
    }

`;