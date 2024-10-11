import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 33.125rem;
    height: 27.8125rem;
    border: solid 1px white;
    border-radius: 5px;

    .buttons{
        display: flex;
        justify-content: space-between;
        height: 5rem;
        cursor: pointer;

        .pix{
            border: solid 1px white;
            border-radius: 5px 0 0 0;
            display: flex;
            width: 50%;
            justify-content: center;
            align-items: center;
            gap: 7px;
        }

        .pix:hover{
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

        .card{
            border: solid 1px white;
            border-radius: 0 5px 0 0;
            display: flex;
            width: 50%;
            justify-content: center;
            align-items: center;
            gap: 7px;
        }

        .card:hover{
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

    }

    .code{
        height: 21.875rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .credit{
        height: 21.875rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 2.5rem;
        gap: 1.25rem;

        .section{
            display:flex;
            gap: 10px;
        }
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.XL}){
        width: 26rem;
    }
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 27rem;
        align-self: center;

        .code{
            img{
                width: 20rem;
            }
        }
    }
`;