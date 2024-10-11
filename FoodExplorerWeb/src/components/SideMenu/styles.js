import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Para empurrar o conteúdo e o botão sair para o final */
`;

export const MenuContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;

    height: 70vh;

    button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.8rem;
        cursor: pointer;
        border-bottom: 0.2px solid;
        border-color: ${({ theme }) => theme.COLORS.LIGHT_600};
        margin-bottom: 1rem;

        img {
            margin-right: 1rem;
        }

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
        }
    }   

`;

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9998; /* Um nível abaixo do menu */
`;

export const CloseButton = styled.button`
    padding: 2rem;
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    gap: 2rem;
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    font-size: 1.5rem;
    cursor: pointer;
    align-self: flex-end;
`;
