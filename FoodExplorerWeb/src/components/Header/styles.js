import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: 'header';
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    align-items:center;

    height: 105px;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 24px 80px;

    > input{
        max-width: 580px;
    }

`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    min-width: 270px;
    font-weight: 700;
    font-size: 24px;
    margin-right: 32px;
    cursor: pointer;

    div{
        display: flex;
        flex-direction: column;

        span{
            align-self: flex-end;
            margin-top: -7px;
            font-size: 12px;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
            font-weight: 400;
        }
    }

`;

export const Logout = styled.button`
    border: none;
    background: none;

    > img{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
        margin-left: 32px;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    width: 220px;
    height: 56px;
    padding: 12px 32px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    border-radius: 5px;
    gap: 8px;
    margin-left: 32px;
`;