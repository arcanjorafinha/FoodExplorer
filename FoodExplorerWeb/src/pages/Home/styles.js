import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas:
    "header"
    "search"
    "content"
    "content";

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
`;
export const Search = styled.div`
    grid-area: search;
    padding: 64px 64px 0;
`;
export const Content = styled.div`
    grid-area: content;
    padding: 0 64px ;
    overflow-y: auto;
`;