import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas:
    "header"
    "content"
    "footer"
    ; 

    .main{
        grid-area: content;
        overflow-y: auto;
    }

    .tags{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    margin: 38px 0;
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
`;