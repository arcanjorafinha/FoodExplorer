import styled from "styled-components";

export const Container = styled.div`

    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    width: 570px;
    height: 660px;
    border-radius: 16px;

    margin: auto 108px auto 0;

    padding: 0 64px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

    text-align: center;


    >h2{
        font-size: 42px;
        font-weight: 500;
        margin: 48px 0;
    }

    >p{
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.WHITE_100}
    }

    >a{
        margin-top: 32px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100}
    }
`;

export const Section = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-size: 42px;
    font-weight: 700;
`;