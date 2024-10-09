import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3.75rem 7.6875rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 1rem;
    }

`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
export const Advertisement = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin: 7.5rem 0 1.875rem 0;
    height: 16.25rem;
    padding: 0 7.5rem 0 0;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    >div{
        align-self: center;
        text-align: center;

        >h1{
        font-size: 2.5rem;
        font-weight: 500;
        }

        > h2{
        font-size: 1rem;
        font-weight: 400;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        margin: 1rem;
        height: 10rem;
        padding: 0 2rem 0 0;

        div{
            h1{
                font-size: 1.5rem;
            }

            h2{
                font-size: 0.8rem;
            }
        }
        
        > img{
            width: 15rem;
        }
    }

`;

export const Menu = styled.div`
    min-height: 37.5rem;
    padding: 1.875rem 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -10px;
        width: 18.75rem;
        height: 100%;
        background: linear-gradient(90deg, #000a0f 15%, rgba(0, 10, 15, 0.1) 95%);
        transition: opacity 0.4s ease;
        z-index: 2; 
        pointer-events: none;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        width: 18.75rem;;
        height: 100%;
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 95%);
        transition: opacity 0.4s ease;
        z-index: 2;
        pointer-events: none; 
    }

    > .MenuButtons{
        width: 100%;
        position: absolute;
        z-index: 4;
        justify-content: space-between;
        align-items: center;
        padding: 0 1.875rem;
        pointer-events: none;

        >button{
        height: 3.125rem;
        width: 3.125rem;
        background: none;
        border: none;
        pointer-events: all;
        }
    }


    > div {
        display: flex;
        gap: 1.6875rem;
        min-height: 500px;
        padding: 1.875rem 8.125rem;
        overflow-x: auto;
        position: relative;
        z-index: 1; 
    }

    > h1 {
        position: relative;
        z-index: 3; 
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 0 1rem;

        &::before{
            background: none;
        }

        &::after{
            background: none;
        }

        div{
            padding: 2rem 1.5rem;
        }
    }
`;




