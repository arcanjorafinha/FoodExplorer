import styled from "styled-components";

export const Container = styled.div`
    width: 530px;
    height: 445px;
    border: solid 1px white;
    border-radius: 5px;

    .buttons{
        display: flex;
        justify-content: space-between;
        height: 80px;
        cursor: pointer;

        .pix{
            border: solid 1px white;
            border-radius: 5px 0 0 0;
            display: flex;
            width: 50%;
            justify-content: center;
            align-items: center;
            gap: 7px;
        }

        .pix:hover{
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }

        .card{
            border: solid 1px white;
            border-radius: 0 5px 0 0;
            display: flex;
            width: 50%;
            justify-content: center;
            align-items: center;
            gap: 7px;
        }

        .card:hover{
            background-color: ${({ theme }) => theme.COLORS.DARK_800};
        }
    }

    .code{
        height: 350px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .credit{
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 40px;
        gap: 20px;

        .section{
            display:flex;
            gap: 10px;
        }
    }

`;