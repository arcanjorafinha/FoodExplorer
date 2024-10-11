import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.button`
    width: 15%;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 3.5rem;
    border: 0;
    padding: 0 1rem; 
    border-radius: 5px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 100%;
    }
`;