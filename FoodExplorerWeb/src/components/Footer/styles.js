import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.footer`
    position: relative;
    width: 100%;
    height: 4.8rem;
    display: flex;
    align-items: center;
    align-self: flex-end;
    justify-content: space-between;
    padding: 1.5rem 7.5rem;
    margin-top: 6.25rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > div{
        align-items: center;
        font-size: 0.625rem;
        display: flex;
        gap: 1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    >p{
        font-size: 0.875rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 1.5rem 2rem;
        margin-top: 0;

        >div{
            >img{
                width: 1.5rem;
            }
        }

        >p{
            font-size: 0.7rem;
        }

    }
`;