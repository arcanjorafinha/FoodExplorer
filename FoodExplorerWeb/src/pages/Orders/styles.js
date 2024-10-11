import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 

    background-color: ${({ theme }) => theme.COLORS.DARK_400};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        justify-content: space-between;
    }
`;

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh; 
    padding: 2.1875rem 7.5rem;

    .orders {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50vw;
        height: 100vh; 

        div {
            padding: 0.625rem 0.625rem;
            min-width: 25vw;
            overflow-y: auto; 
            width: 100%;
        }
    }

    .payment {
        display: flex;
        flex-direction: column;
        width: 50vw;
        padding-left: 2rem; 

        h2{
            margin-bottom: 3rem;
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XL}){
        padding: 2.1875rem 3rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        padding: 1rem 2rem;
        flex-direction: column; 
        height: auto; 
        flex-grow: 1;

        .orders {
            width: 100%; 
            height: auto; 
            margin-bottom: 2rem; 
        }

        .orders div {
            overflow-y: visible; 
            height: auto; 
        }

        .payment {
            width: 100%; 
            padding-left: 0;
        }
    }
`;

