import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;

export const Main = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 35px 120px;

    .orders{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 50vw;
        height: 100vh;

        h2{
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 24px;
        }

        h3{
            font-size: 20px;
            font-weight: 500;
            margin-top: 24px;
        }
    }

    .payment{

        h2{
            font-size: 32px;
            font-weight: 500;
            margin-bottom: 32px;
        }

    }
`;