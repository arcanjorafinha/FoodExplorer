import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    display: flex;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;
    gap: 15px;

    div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    p{
        font-size: 1.25rem;
        font-weight: 500;
    }

    span{
        font-size: 1.3rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
        cursor: pointer;

        &:hover{
            text-decoration: underline;
        }
    }

    h3{
        font-size: 0.9375rem;
        font-weight: 400;
    }

    img{
        width: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        img{
            width: 10rem;
        }

    }

`;