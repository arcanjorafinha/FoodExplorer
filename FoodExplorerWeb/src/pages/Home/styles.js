import styled from "styled-components";

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 60px 123px;
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
export const Advertisement = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin: 120px 0 30px 0;
    height: 260px;
    padding: 0 120px 0 0;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    >div{
        align-self: center;
        text-align: center;

        >h1{
        font-size: 40px;
        font-weight: 500;
        }

        > h2{
        font-size: 16px;
        font-weight: 400;
        }
    }

`;

export const Menu = styled.div`
    min-height: 600px;
    padding: 30px 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -10px;
        width: 300px;
        height: 100%;
        background: linear-gradient(90deg, #000a0f 15%, rgba(0, 10, 15, 0.1) 95%);
        transition: opacity 0.4s ease;
        z-index: 2; 
        pointer-events: none;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: -10px;
        width: 300px;
        height: 100%;
        background: linear-gradient(90deg, rgba(0, 10, 15, 0.1) 0%, #000a0f 95%);
        transition: opacity 0.4s ease;
        z-index: 2;
        pointer-events: none; 
    }

    > .MenuButtons{
        width: 100%;
        position: absolute;
        z-index: 4;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
        pointer-events: none;

        >button{
        height: 50px;
        width: 50px;
        background: none;
        border: none;
        pointer-events: all;
        }
    }


    > div {
        display: flex;
        gap: 27px;
        min-height: 500px;
        padding: 30px 130px;
        overflow-x: auto;
        position: relative;
        z-index: 1; 
    }

    > h1 {
        position: relative;
        z-index: 3; 
    }
`;




