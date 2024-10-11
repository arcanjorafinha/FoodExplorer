import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;

    .tags{
        margin: 2.8125rem 0;
        display: flex;
        align-items: center;
        gap: 2.5rem;

        > section{
            margin-top: 2.375rem;
            display: flex;
            z-index: 0;
            align-items: center;
            width: 290%;
            padding: 8px;
            border-radius: 5px;
            min-width: 50%;
            gap: 10px;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            height: 3rem;

           >h2{
            position: absolute;
            z-index: 1;
            margin-left: -7px;
            margin-bottom: 5.9375rem;
            font-size: 1rem;
            font-weight: 400;
           } 
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        .tags{
            display: flex;
            flex-direction: column;

            section{
                width: 100%;
            }
        }
    }
`;

export const Form = styled.form`
    margin: 2.8125rem  0;
    padding: 0 7.5rem;

    > header{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;

        margin-bottom: 2.25rem;

        > h1{
            font-size: 2rem;
            font-weight: 500;
        }

        >button{
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 1.25rem;
        gap: 10px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > .FirstPart{
        display: flex;
        gap: 2rem;
    }

    >section{
        h2{
            font-size: 1rem;
            font-weight: 400;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 0 1rem;

        .FirstPart{
            display: flex;
            flex-direction: column;
        }
    }
`;

export const Buttons = styled.div`
    justify-content: flex-end;
    display: flex;
    margin: 2rem 0 1.25rem 0;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        margin: 2rem 0;
    }
`;

