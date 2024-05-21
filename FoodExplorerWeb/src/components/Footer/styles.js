import styled from "styled-components";

export const Container = styled.footer`
    grid-area: 'footer';
    position: relative;
    width: 100%;
    height: 77px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 120px;
    margin-top: 100px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    > div{
        align-items: center;
        font-size: 10px;
        display: flex;
        gap: 16px;
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    >p{
        font-size: 14px;
    }
`;