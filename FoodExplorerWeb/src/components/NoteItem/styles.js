import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

    border-radius: 0.5rem;
    padding-right: 1rem; 

    >button{
        border: none;
        background: none;
    }

    .button-delete{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .button-add{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    >input{
        height: 2rem;
        width: 100%;

        padding: 0.625rem 1rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        width: 20%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 25%;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        width: 35%;
    }
`;  