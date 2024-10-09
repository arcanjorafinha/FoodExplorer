import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    min-width: 18.75rem;
    min-height: 28.75rem;
    max-width: 18.75rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};
    border-radius: 8px;
    padding: 0.9375rem 1.5rem;
    text-align: center;
    gap: 0.625rem;

    
    display: flex;
    flex-direction: column;
    align-items: center;

    >h1{
        font-size: 1.625rem;
    }
    >h2{
        font-size: 0.875rem;
        font-weight: 400;
    }

    > div{
        align-items: center;
        justify-content: space-between;
        display: flex;
        width: 80%;
        height: 3rem;
        gap: 0.875rem;
    }

    >span{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 2rem;
        font-family: "Roboto", serif;
        font-weight: 400;
    }

    >img{
        cursor: pointer
    }

    >.plateImg{
        width: 11rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        min-width: 19rem;
        min-height: 15rem;
        max-height: 35rem;

        div{
            margin-left: -2.5rem;
        }

        >img{
            width: 1.8rem;
        }
    }
`;