import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    grid-area: 'header';
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    align-items:center;

    height: 6,56rem;
    width: 100%;

    display: flex;
    justify-content: space-between;

    padding: 1.5rem 5rem;

    > .nav{
        width: 50%;
    }

    > .Hamburger{
        display: none;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){

        padding:1.5rem 2rem;

        > .Hamburger{
            padding-left: 1rem;
            margin-right: 2rem;
            display: flex;
            cursor: pointer;
        }
        > .nav{
            display: none;
        }
    }



`;
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-width: 17rem;
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 2rem;
    cursor: pointer;

    div{
        display: flex;
        flex-direction: column;

        span{
            align-self: flex-end;
            margin-top: -7px;
            font-size: 0.75rem;
            color: ${({ theme }) => theme.COLORS.CAKE_200};
            font-weight: 400;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        margin-right: 0rem;
        img{
            width: 2rem;
        }
    }

`;

export const Logout = styled.button`
    border: none;
    background: none;

    > img{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.25rem;
        margin-left: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        display:none;
    }
    
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    width: 13.75rem;
    height: 3.5rem;
    padding: 0.75rem 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    border-radius: 0.3125rem;
    gap: 8px;
    margin-left: 2rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        background: none;
        padding: 0rem;
        margin-left: 0rem;
        width: 5rem;

        >p{
            display:none;
        }
    }
`;

export const DropdownMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    width: 200px;
    z-index: 1000;
    padding: 1rem;

    .search {
        margin-bottom: 1rem;
    }

    button {
        width: 100%;
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        text-align: left;
        cursor: pointer;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
        }
    }
`;
