import styled from "styled-components";

export const Container = styled.button`
    width: 15%;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.TOMATO_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    height: 56px;
    border: 0;
    padding: 0 16px; 
    border-radius: 5px;
    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }
`;