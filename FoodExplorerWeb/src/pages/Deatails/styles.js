import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
    padding: 1.875rem 7.5rem;

    >button{
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 1.25rem;
        gap: 0.625rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 1.5rem 2rem;
        overflow-y: auto;
    }
`;

export const Plate = styled.div`
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > .plateImg{
        width: 24.375rem;
    }

    > section {
        >h1{
            font-size: 5rem;
            font-weight: 500;
        }
        > p{
            font-size: 1.5rem;
        }
        > div{
            margin-top: 0.9375rem;
            align-items: center;
            width: 50%;
            display: flex;
            flex-direction: row;
            gap: 1.875rem;
        }
        > button{
            margin-top: 0.9375rem;
            margin-right: 0.625rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            border: none;
            border-radius: 5px;
            padding: 5px;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .plateImg{
            width: 20rem;
        }

        section{

            text-align: center;
            h1{
                font-size: 3rem;
            }

            p{
                font-size: 1.3rem;
            }

            div{
                width: 90%;
                margin-top: 3rem;
                padding-bottom: 1rem;

                button{
                    margin-bottom: -2rem;
                }
            }
        }
        
    }

`;