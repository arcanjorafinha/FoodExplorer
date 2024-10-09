import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;

    >input{
        max-height: 3.5rem;
        width: 100%;
        min-width: 12.5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;
        border: none;

        padding:0.875rem;

        border-radius: 5px;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

    }

    > svg{
        margin-left: 30%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        padding: 0 2.5rem;

        > svg{
            margin-left: 0;
        }
    }
`;