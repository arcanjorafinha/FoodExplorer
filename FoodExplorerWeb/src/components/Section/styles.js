import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0;
    display: flex;
    justify-content: space-between;

    > h2{

        padding-bottom: 16px;
        margin-bottom: 28px;

        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 20px;
        font-weight: 400;
    }
`;