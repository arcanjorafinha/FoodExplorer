import styled from "styled-components";
import CaretDown from "../../assets/icons/CaretDown.svg";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 12px;

    > .custom-select-wrapper {
        position: relative;
        width: 100%;

        > select {
            width: 100%;
            max-height: 56px;
            background-color: ${({ theme }) => theme.COLORS.DARK_900};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            border: none;
            border-radius: 5px;
            padding: 12px;
            appearance: none;
            font-family: 'Poppins', serif;
            font-size: 16px;
        }

        > .custom-arrow {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            width: 24px;
            height: 24px;
            background-image: url(${CaretDown});
            background-size: contain;
            background-repeat: no-repeat;
            color: ${({ theme }) => theme.COLORS.LIGHT_500}
        }
    }
`;
