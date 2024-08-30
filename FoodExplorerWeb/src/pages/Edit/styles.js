import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-height: 100vh;
    display: flex;
    flex-direction: column;

    .tags{
        margin: 45px 0;
        display: flex;
        align-items: center;
        gap: 40px;

        > section{
            margin-top: 38px;
            display: flex;
            z-index: 0;
            align-items: center;
            width: 290%;
            padding: 8px;
            border-radius: 5px;
            min-width: 50%;
            gap: 10px;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            height: 48px;

           >h2{
            position: absolute;
            z-index: 1;
            margin-left: -7px;
            margin-bottom: 95px;
            font-size: 16px;
            font-weight: 400;
           } 
        }
    }
`;

export const Form = styled.form`
    margin: 45px 0;
    padding: 0 120px;

    > header{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;

        margin-bottom: 36px;

        > h1{
            font-size: 32px;
            font-weight: 500;
        }

        >button{
        display: flex;
        align-items: center;
        background: none;
        border: none;
        font-size: 20px;
        gap: 10px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    > .FirstPart{
        display: flex;
        gap: 32px;
    }

    >section{
        h2{
            font-size: 16px;
            font-weight: 400;
        }
    }
`;

export const Buttons = styled.div`
    justify-content: flex-end;
    display: flex;
    margin: 32px 0 20px 0;
    gap: 20px;
`;

